export class WiremockClient {
    stubFor = (mappingBuilder: BasicMappingBuilder): StubMapping => {
        return this.givenThat(mappingBuilder);
    }

    givenThat = (mappingBuilder: BasicMappingBuilder): StubMapping => {
        return new WiremockClient();
    }
}

export class BasicMappingBuilder {
    private requestPatternBuilder: RequestPatternBuilder;
    private responseDefBuilder: ResponseDefinitionBuilder;
    private priority: number;
    private scenarioName: string;
    private requiredScenarioState: string;
    private newScenarioState: string;
    private id: string = uuidv4();
    private name: string;
    private isPersistent: boolean = false;
    private postServeActions: any = {};

    constructor(method: RequestMethod, urlPattern: UrlPattern) {
        this.requestPatternBuilder = new RequestPatternBuilder(method, urlPattern);
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    willReturn(responseDefBuilder: ResponseDefinitionBuilder) {
        this.responseDefBuilder = responseDefBuilder;
        return this;
    }

    withQueryParam(key: string, queryParamPattern: string): BasicMappingBuilder {
        this.requestPatternBuilder.withQueryParam(key, queryParamPattern);
        return this;
    }

    withRequestBody(bodyPattern: ContentPattern): BasicMappingBuilder {
        this.requestPatternBuilder.withRequestBody(bodyPattern);
        return this;
    }


}

export class RequestPatternBuilder {
    private url: UrlPattern;
    private method: RequestMethod;
    // private headers: any = {};
    // private queryParams: any = {};
    // private bodyPatterns: any = [];
    // private cookies: any = {};
    // private basicCredentials: BasicCredentials;


    constructor(url: UrlPattern, method: RequestMethod) {
        this.url = url;
        this.method = method;
    }
}

export class RequestMethod {
    public static GET: RequestMethod = new RequestMethod("GET");
    public static POST: RequestMethod = new RequestMethod("POST");
    public static PUT: RequestMethod = new RequestMethod("PUT");
    public static DELETE: RequestMethod = new RequestMethod("DELETE");
    public static PATCH: RequestMethod = new RequestMethod("PATCH");
    public static OPTIONS: RequestMethod = new RequestMethod("OPTIONS");
    public static HEAD: RequestMethod = new RequestMethod("HEAD");
    public static TRACE: RequestMethod = new RequestMethod("TRACE");
    public static ANY: RequestMethod = new RequestMethod("ANY");

    private name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class UrlPattern {
    private pattern: string;


    constructor(pattern: string) {
        this.pattern = pattern;
    }
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