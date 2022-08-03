import React from "react";

function Map() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="">We Are Serving Near You</h3>
        <iframe
          className="w-[100%] h-[400px]"
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
