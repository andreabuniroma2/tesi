class ConstructUrl{
      static constructURLForReaserchWDistance(latitude,longitude,distance){
          return"http://localhost:8080/TesiRivelazioneIncendi/Incendi?latitude="+latitude+"&longitude="+longitude+"&distance="+distance;
      }
      static constructURLForReaserchWDistanceWGravity(latitude,longitude,distance,gravity){
        return"http://localhost:8080/TesiRivelazioneIncendi/Incendi?latitude="+latitude+"&longitude="+longitude+"&distance="+distance+"&gravity="+gravity;
    }
      static constructURLForRegion(region){
        return"http://localhost:8080/TesiRivelazioneIncendi/Incendi?region="+region;
    }
    static constructURLForRegionWGravity(region,gravity){
        return"http://localhost:8080/TesiRivelazioneIncendi/Incendi?region="+region+"&gravity="+gravity;
    }
    static constructURLForResources(){
        
    }
  
    
}
export { ConstructUrl }