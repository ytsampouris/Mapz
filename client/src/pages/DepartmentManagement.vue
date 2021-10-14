<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
            <q-btn icon="add" flat round @click="newDepartmentDialog = true"></q-btn>Τμήματα
          </q-item-label>
          <q-item
            v-for="department in departments"
            :key="department._id"
            v-bind="department"
            clickable
            @click="selectedDepartmentId = department._id; selectedDepartment = department"
          >
            <q-item-section>
              <q-item-label>{{ department.title }}</q-item-label>
              <q-item-label caption>
                {{ department.description }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-btn flat round icon="edit" @click.stop="updateDepartmentDialog=true; departmentToUpdate = department"/>
            </q-item-section>
            <q-item-section side top>
              <q-btn flat round icon="delete" @click.stop="deleteDepartment(department._id)" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col">
          <q-list>
            <q-item-label
              header
              class="text-grey-8"
            >
            Μέλη επιλεγμένου τμήματος
            </q-item-label>
            <q-item
              v-for="user in usersByDepartment"
              :key="user._id"
              v-bind="user"
              clickable
              @click="userToEdit = user; newUserDialog = true"
            >
              <q-item-section>
                <q-item-label>{{ user.fullname }}</q-item-label>
              </q-item-section>
              <q-item-section side top v-if="user._id === selectedDepartment.manager">
                <q-btn flat round color="primary" icon="stars" disable/>
              </q-item-section>
              <q-item-section side top v-if="user._id !== selectedDepartment.manager">
                <q-btn flat round color="grey" icon="stars" @click.stop="toggleManager(user._id)"/>
              </q-item-section>
            </q-item>
          </q-list>
      </div>
    </div>
    <q-dialog v-model="newDepartmentDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Νέο Τμήμα</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense label="Τίτλος" v-model="newDepartment.title" autofocus @keyup.enter="prompt = false" />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense label="Περιγραφή" v-model="newDepartment.description" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Άκυρο" v-close-popup />
          <q-btn flat label="Προσθήκη" v-close-popup @click="createDepartment()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="updateDepartmentDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Επεξεργασία Τμήματος</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense label="Τίτλος" v-model="departmentToUpdate.title" autofocus @keyup.enter="prompt = false" />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense label="Περιγραφή" v-model="departmentToUpdate.description" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Άκυρο" v-close-popup />
          <q-btn flat label="Προσθήκη" v-close-popup @click="updateDepartment()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="newUserDialog" persistent>
      <userProfile :user="userToEdit"></userProfile>
    </q-dialog>
  </q-page>
</template>

<script>
import { queries, mutations } from 'src/graphql';
import userProfile from 'components/UserProfile.vue';

export default {
  name: 'DepartmentManagement',
  components: { userProfile },
  apollo: {
    departments: {
      query: queries.getDepartments,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    },
    usersByDepartment: {
      query: queries.getUsersOfDepartment,
        variables() {
          return {
            _id: this.selectedDepartmentId
          }
        },
        error(error) {
        this.error = JSON.stringify(error.message);
      }
    },
  },
  methods: {
    listUsers() {
      this.$apollo.queries.getUsersOfDepartment.refetch();
    },
    createDepartment() {
      const title = this.newDepartment.title;
      const description = this.newDepartment.description;
      this.$apollo.mutate({
        mutation: mutations.createDepartment,
        variables: {
          title,
          description
        },update: (cache, { data: { createDepartment } }) => {
          if (createDepartment) {
            const data = cache.readQuery({
              query: queries.getDepartments
            });
            data.departments = [...data.departments, createDepartment];
            cache.writeQuery({
              query: queries.getDepartments,
              data
            });
          }
        }
      })
    },
    deleteDepartment(_id) {
      this.$q.notify({
        message: 'Διαγραφή Τμήματος;',
        color: 'negative',
        timeout:0,
        actions: [
          { label: 'Διαγραφή', color: 'white', handler: () => {
            this.$apollo.mutate({
              mutation: mutations.deleteDepartment,
              variables: {
                _id
              },update: (cache, { data: { deleteDepartment } }) => {
                if (deleteDepartment) {
                  const data = cache.readQuery({
                    query: queries.getDepartments
                  });
                  data.departments = data.departments.filter(d => d._id !== _id);
                  cache.writeQuery({
                    query: queries.getDepartments,
                    data
                  });
                }
              }
            });
            this.$q.loading.hide();
            }
          },
          { label: 'Άκυρο', color: 'white' }
        ]
      })
    },
    updateDepartment() {
      const _id = this.departmentToUpdate._id;
      const title = this.departmentToUpdate.title;
      const description = this.departmentToUpdate.description;
      this.$apollo.mutate({
        mutation: mutations.updateDepartment,
        variables: {
          _id,
          title,
          description
        },update: (cache, { data: { updateDepartment } }) => {
          if (updateDepartment) {
            const data = cache.readQuery({
              query: queries.getDepartments
            });
            cache.writeQuery({
              query: queries.getDepartments,
              data
            });
          }
        }
      })
    },
    toggleManager(id) {
      const _id = this.selectedDepartmentId;
      const manager = id;
      this.$apollo.mutate({
        mutation: mutations.updateDepartmentManager,
        variables: {
          _id,
          manager
        },update: (cache, { data: { updateDepartmentManager } }) => {
          if (updateDepartmentManager) {
            const data = cache.readQuery({
              query: queries.getUsersOfDepartment
            });
            cache.writeQuery({
              query: queries.getUsersOfDepartment,
              data
            });
          }
        }
      })
      this.selectedDepartment.manager = id;
    }
  },
  data() {
    return {
      newDepartmentDialog: false,
      newDepartment: {
        title: null,
        description: null
      },
      selectedDepartmentId: null,
      selectedDepartment: null,
      userToEdit: null,
      newUserDialog: false,
      updateDepartmentDialog: false,
      departmentToUpdate: {
        _id: null,
        title: null,
        description: null
      },
    }
  }
}
</script>
