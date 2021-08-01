function updateMap(params) {
    fetch("/data.json")
    .then(Response=>Response.json())
    .then(rsp=>{
        console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;
            cases=element.infected;
            // recover=element.recovered;
            if (cases>520) {
                color="rgb(255, 0, 0)";
            }
            else {
                color=`rgb(${cases},0,0)`;
            }
            // if (recover!=0) {
            //     color="green";
            // }
            new mapboxgl.Marker({
                draggable: false,
                color:color
              })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}
updateMap();