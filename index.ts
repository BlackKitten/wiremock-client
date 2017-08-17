import * as child from 'child-process-es6-promise';

export class WiremockClient {
    stubFor = (mappingBuilder: MappingBuilder):StubMapping => {
        return new StubMapping();
    }

    givenThat = (mappingBuilder: MappingBuilder): StubMapping => {
        return new WiremockClient();
    }
}

export class MappingBuilder {

}

export class StubMapping {

}

// stubFor(any(urlPathEqualTo("/everything"))
//     .withHeader("Accept", containing("xml"))
//     .withCookie("session", matching(".*12345.*"))
//     .withQueryParam("search_term", equalTo("WireMock"))
//     .withBasicAuth("jeff@example.com", "jeffteenjefftyjeff")
//     .withRequestBody(equalToXml("<search-results />"))
//     .withRequestBody(matchingXPath("//search-results"))
//     .willReturn(aResponse()));