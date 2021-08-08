class ConstructUrl {
    static lastResearch;
    static lastFunction;
    static gravitySetted=false;
    static constructURLForReaserchWDistance(latitude, longitude, distance) {
        return this.lastResearch = "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerDistanza?latitude=" + latitude + "&longitude=" + longitude + "&distance=" + distance;
    }
    static constructURLForReaserchWDistanceWGravity(latitude, longitude, distance, gravity) {
        return this.lastResearch = "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerDistanza?latitude=" + latitude + "&longitude=" + longitude + "&distance=" + distance + "&gravity=" + gravity;
    }
    static constructURLForRegions(region, gravity) {
        if (gravity == null)
            return this.lastResearch = "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerRegione?region=" + region;
        else {
            this.gravitySetted = true;
            return this.lastResearch = "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerRegione?region=" + region + "&gravity=" + gravity;
        }
    }
    static constructURLForProvinces(province, gravity) {
        if (gravity == null)
            return this.lastResearch = "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerProvincia?province=" + province;
        else {
            this.gravitySetted = true;
            return this.lastResearch = "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerProvincia?province=" + province + "&gravity=" + gravity;
        }
    }
    static constructURLForComunes(comune, gravity) {
        if (gravity == null)
            return this.lastResearch = "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerComune?comune=" + comune;
        else {
            this.gravitySetted = true;
            return this.lastResearch = "http://localhost:8080/TesiRivelazioneIncendi/RicercaPerComune?comune=" + comune + "&gravity=" + gravity;
        }
    }

    static insertGravityToLastSearch(gravity) {
        if (this.gravitySetted) {
            if (gravity == "") {
                this.lastResearch=this.lastResearch.substr(0, this.lastResearch.indexOf('&gravity'));
                console.log(this.lastResearch);
                this.gravitySetted = false;
                //levare il gravity dalla lastSearch
            } else {
                //cambiare il gravity
                this.lastResearch=this.lastResearch.substr(0,this.lastResearch.indexOf('&gravity'))+"&gravity="+gravity;
                console.log(this.lastResearch);
                this.gravitySetted = true;
            }

        } else {
            if (gravity != "") {
                this.gravitySetted = true;
                this.lastResearch = this.lastResearch + "&gravity=" + gravity.trim();
                console.log(this.lastResearch);
            }
        }
    }
    /**soltanto il ritorno delle liste delle regioni,comuni.province */
    static constructURLForFindProvinces(codiceRegione) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaInItalia?tipo=provincia&id=" + codiceRegione;
    }
    static constructURLForFindComunes(codiceProvincia) {
        return "http://localhost:8080/TesiRivelazioneIncendi/RicercaInItalia?tipo=comune&id=" + codiceProvincia;
    }
    //
    static getLastReaserch() {
        return this.lastResearch;
    }

}
export { ConstructUrl }