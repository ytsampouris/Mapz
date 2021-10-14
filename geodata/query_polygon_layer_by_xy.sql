CREATE OR REPLACE FUNCTION public.query_polygon_layer_by_xy(
	layer character varying,
	x double precision,
	y double precision)
    RETURNS text
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
declare
   result text;
begin
   EXECUTE 'SELECT ST_AsGeoJSON(' || layer || '.*) as result 
   from ' || layer || '
   where ST_Contains(geom, ST_SetSRID( ST_Point(' || x || ',' || y || '), 3857));' INTO result;
   return result;
end;
$BODY$;

ALTER FUNCTION public.query_polygon_layer_by_xy(character varying, double precision, double precision)
    OWNER TO postgres;
