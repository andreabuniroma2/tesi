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
    static constructURLForFindRegions() {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaInItalia?tipo=regione";
    }
    static constructURLForFindProvinces(zona) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaInItalia?tipo=provincia&zona=" + zona;
    }
    static constructURLForFindComunes(zona) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaInItalia?tipo=comune&zona=" + zona;
    }

}
export { ConstructUrl }