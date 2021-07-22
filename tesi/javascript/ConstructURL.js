class ConstructUrl {
    static lastResearch;
    static constructURLForReaserchProva() {
        return this.lastResearch="http://localhost:8080/TesiRivelazioneIncendi/RicercaPerDistanza";
    }
    static constructURLForReaserchWDistance(latitude, longitude, distance) {
        return this.lastResearch="http://localhost:8080/TesiRivelazioneIncendi/RicercaPerDistanza?latitude=" + latitude + "&longitude=" + longitude + "&distance=" + distance;
    }
    static constructURLForReaserchWDistanceWGravity(latitude, longitude, distance, gravity) {
        return this.lastResearch="http://localhost:8080/TesiRivelazioneIncendi/RicercaPerDistanza?latitude=" + latitude + "&longitude=" + longitude + "&distance=" + distance + "&gravity=" + gravity;
    }
    static constructURLForRegions(region,gravity) {
        if (gravity==null)
        return this.lastResearch= "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerRegione?region=" + region;
        else 
        return this.lastResearch="http://localhost:8080/TesiRivelazioneIncendi/RicercaPerRegione?region=" + region + "&gravity=" + gravity;
    }
    static constructURLForProvinces(province,gravity) {
        if (gravity==null)
        return this.lastResearch= "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerProvincia?province=" + province;
        else 
        return this.lastResearch="http://localhost:8080/TesiRivelazioneIncendi/RicercaPerProvincia?province=" + province + "&gravity=" + gravity;
    }
    static constructURLForComunes(comune,gravity) {
        if (gravity==null)
        return  "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerComune?comune=" + comune;
        else 
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerComune?comune=" + comune + "&gravity=" + gravity;
    }

    static constructURLForResources() {

    }
    /**soltanto il ritorno delle liste delle regioni,comuni.province */
    static constructURLForFindProvinces(codiceRegione) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaInItalia?tipo=provincia&id=" + codiceRegione;
    }
    static constructURLForFindComunes(codiceProvincia) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaInItalia?tipo=comune&id=" + codiceProvincia;
    }

}
export { ConstructUrl }