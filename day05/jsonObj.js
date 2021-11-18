 //Assignment Ram details JSON object   
    let ramDetails = {
        "memory_summary" : {
            "maximum_capacity" : "2048 MBytes",
            "maximum_memory_module_size" : "4096 Mbytes",
            "memory_slots" : "4",
            "error_connection" : "None",
            "DRAM Frequency" : "199.0 MHz",
            "memory_timing" : "3-3-3-8(CL-RCD-RP-RAS",
            } ,
        "device_locator" :{ slot_1 : {
            "manufacturer" : "Hyundai Electronics",
            "part_number" : "HYMD264 646D8J-D43",
            "serial_number" : "FFFF7240",
            "capacity" : "512 MBytes",
            "memory_type" : "DDR (PC3200)",
            "speed" : "200MHz",
            "supported_frequencies" : ["133MHz","166MHz","200MHz"],
            "memory_timings" : {"At 133MHz" : "2-2-2-6-0",
                              "At 166MHz" : "2-3-3-7-0",
                              "At 200MHz" : "3-3-3-8-0",
                                },
            "data_width" : "64 bits",
            "manufacturing_date" : [2005,"Week39"],
            "epp_spd_support" : "No",
            "xmp_spd_support" : "No"
            
             }
        }
    };    
        
    
        console.log(ramDetails.device_locator.slot_1.memory_timings["At 200MHz"]);
