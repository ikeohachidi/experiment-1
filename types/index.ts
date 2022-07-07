export type UWBLocation = {
   position: {
      lat: number,
      lng: number,
   },
   address: string
}

export type MapOptions = {
   zoomControl: boolean,
   mapTypeControl: boolean,
   scaleControl: boolean,
   streetViewControl: boolean,
   rotateControl: boolean,
   fullScreenControl: boolean
}