"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WiremockClient = (function () {
    function WiremockClient() {
        this.stubFor = function (mappingBuilder) {
            return new StubMapping();
        };
        this.givenThat = function (mappingBuilder) {
            return new WiremockClient();
        };
    }
    return WiremockClient;
}());
exports.WiremockClient = WiremockClient;
var MappingBuilder = (function () {
    function MappingBuilder() {
    }
    return MappingBuilder;
}());
exports.MappingBuilder = MappingBuilder;
var StubMapping = (function () {
    function StubMapping() {
    }
    return StubMapping;
}());
exports.StubMapping = StubMapping;
// stubFor(any(urlPathEqualTo("/everything"))
//     .withHeader("Accept", containing("xml"))
//     .withCookie("session", matching(".*12345.*"))
//     .withQueryParam("search_term", equalTo("WireMock"))
//     .withBasicAuth("jeff@example.com", "jeffteenjefftyjeff")
//     .withRequestBody(equalToXml("<search-results />"))
//     .withRequestBody(matchingXPath("//search-results"))
//     .willReturn(aResponse())); 
