class ConstructUrl {
    lastResearch;
    static constructURLForReaserchProva() {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerDistanza";
    }
    static constructURLForReaserchWDistance(latitude, longitude, distance) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerDistanza?latitude=" + latitude + "&longitude=" + longitude + "&distance=" + distance;
    }
    static constructURLForReaserchWDistanceWGravity(latitude, longitude, distance, gravity) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerDistanza?latitude=" + latitude + "&longitude=" + longitude + "&distance=" + distance + "&gravity=" + gravity;
    }
    static constructURLForRegion(region) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerRegione?region=" + region;
    }
    static constructURLForRegionWGravity(region, gravity) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerRegione?region=" + region + "&gravity=" + gravity;
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