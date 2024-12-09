
import {
    data_stack_store,
    on_sidebar_trigger_store,
    realtime_vehicle_locations_last_updated_store,
    realtime_vehicle_locations_store,
    realtime_vehicle_route_cache_hash_store,
    realtime_vehicle_route_cache_store,
    lock_on_gps_store,
    usunits_store,
    show_zombie_buses_store,
    show_my_location_store,
    custom_icons_category_to_layer_id,
    map_pointer_store,
    geolocation_store,
    chateaus_store,
    show_gtfs_ids_store,
    ui_theme_store,
    show_seconds_store
} from '../globalstores';

export function init_stores() {
    if (typeof window != "undefined") {
        if (window.localStorage.getItem('usunits') == 'true') {
            usunits_store.set(true)
        } else {
            usunits_store.set(false)
        }
        
        if (window.localStorage.getItem('show_gtfs_ids') == 'true') {
            show_gtfs_ids_store.set(true)
        } else {
            show_gtfs_ids_store.set(false)
        }
    
        if (window.localStorage.show_gtfs_ids == true) {
            show_gtfs_ids_store.set(true);
        }

        let ui_theme_grab=window.localStorage.getItem("ui_theme_store");
        if (ui_theme_grab) {
            ui_theme_store.set(ui_theme_grab);
        }

        ui_theme_store.subscribe(value => {
            window.localStorage.setItem("ui_theme_store", value);
        });

        show_seconds_store.subscribe(value => {
            window.localStorage.setItem('show_seconds', value);
        }
    );
    }
}