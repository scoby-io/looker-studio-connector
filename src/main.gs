var cc = DataStudioApp.createCommunityConnector();

function getAuthType() {
    var cc = DataStudioApp.createCommunityConnector();
    return cc.newAuthTypeResponse()
        .setAuthType(cc.AuthType.KEY)
        .build();
}

// https://developers.google.com/datastudio/connector/reference#getconfig
function getConfig() {
    var config = cc.getConfig();
    config.setDateRangeRequired(true);
    return config.build();
}

function getApiKey() {
    var userProperties = PropertiesService.getUserProperties();
    return userProperties.getProperty('scoby.apiKey');
}

function getFields() {
    var fields = cc.getFields();
    var types = cc.FieldType;
    var aggregations = cc.AggregationType;


    fields
        .newDimension()
        .setId('day')
        .setName('Day')
        .setType(types.YEAR_MONTH_DAY)
        .setGroup('Traffic');

    fields
        .newDimension()
        .setId('host')
        .setName('Host')
        .setType(types.TEXT)
        .setGroup('Content');

    fields
        .newDimension()
        .setId('path')
        .setName('Page')
        .setType(types.TEXT)
        .setGroup('Content');

    fields
        .newDimension()
        .setId('device_type')
        .setName('Device Type')
        .setType(types.TEXT)
        .setGroup('Device');

    fields
        .newDimension()
        .setId('app_name')
        .setName('App Name')
        .setType(types.TEXT)
        .setGroup('Device');

    fields
        .newDimension()
        .setId('app_type')
        .setName('App Type')
        .setType(types.TEXT)
        .setGroup('Device');

    fields
        .newDimension()
        .setId('utm_medium')
        .setName('UTM Medium')
        .setType(types.TEXT)
        .setGroup('Sources');

    fields
        .newDimension()
        .setId('utm_source')
        .setName('UTM Source')
        .setType(types.TEXT)
        .setGroup('Sources');

    fields
        .newDimension()
        .setId('utm_campaign')
        .setName('UTM Campaign')
        .setType(types.TEXT)
        .setGroup('Sources');

    fields
        .newDimension()
        .setId('utm_content')
        .setName('UTM Content')
        .setType(types.TEXT)
        .setGroup('Sources');

    fields
        .newDimension()
        .setId('utm_term')
        .setName('UTM Term')
        .setType(types.TEXT)
        .setGroup('Sources');

    fields
        .newDimension()
        .setId('referrer')
        .setName('Referrer')
        .setType(types.TEXT)
        .setGroup('Sources');

    fields
        .newDimension()
        .setId('referrer_type')
        .setName('Referrer Type')
        .setType(types.TEXT)
        .setGroup('Sources');

    fields
        .newDimension()
        .setId('visitor_type')
        .setName('Visitor Type')
        .setType(types.TEXT)
        .setGroup('Visitors');

    fields
        .newMetric()
        .setId('views')
        .setName('Views')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Traffic');

    fields
        .newMetric()
        .setId('visitors')
        .setName('Visitors')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Traffic');

    fields
        .newMetric()
        .setId('new_visitors')
        .setName('New Visitors')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Traffic');


    fields
        .newMetric()
        .setId('new_visitors_rate')
        .setName('New Visitors Rate')
        .setType(types.PERCENT)
        .setIsReaggregatable(false)
        .setGroup('Traffic');


    fields
        .newMetric()
        .setId('returning_visitors')
        .setName('Returning Visitors')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Traffic');


    fields
        .newMetric()
        .setId('returning_visitors_rate')
        .setName('Returning Visitors Rate')
        .setType(types.PERCENT)
        .setIsReaggregatable(false)
        .setGroup('Traffic');


    fields
        .newMetric()
        .setId('visits')
        .setName('Visits')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Traffic');


    fields
        .newMetric()
        .setId('entries')
        .setName('Entries')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Traffic');

    fields
        .newMetric()
        .setId('exits')
        .setName('Exits')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Traffic');


    fields
        .newMetric()
        .setId('bounces')
        .setName('Bounces')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Traffic');


    fields
        .newMetric()
        .setId('bounce_rate')
        .setName('Bounce Rate')
        .setType(types.PERCENT)
        .setIsReaggregatable(false)
        .setGroup('Traffic');

    fields
        .newMetric()
        .setId('converters')
        .setName('Converters')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Commercial');

    fields
        .newMetric()
        .setId('conversions')
        .setName('Conversions')
        .setType(types.NUMBER)
        .setIsReaggregatable(false)
        .setGroup('Commercial');

    fields
        .newMetric()
        .setId('conversion_rate')
        .setName('Conversion Rate')
        .setType(types.PERCENT)
        .setIsReaggregatable(false)
        .setGroup('Commercial');

    fields
        .newMetric()
        .setId('time_to_conversion_avg')
        .setName('Time to Conversion (Avg.)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Commercial');

    fields
        .newMetric()
        .setId('time_to_conversion_p25')
        .setName('Time to Conversion (25%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Commercial');

    fields
        .newMetric()
        .setId('time_to_conversion_p50')
        .setName('Time to Conversion (50%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Commercial');

    fields
        .newMetric()
        .setId('time_to_conversion_p75')
        .setName('Time to Conversion (75%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Commercial');

    fields
        .newMetric()
        .setId('time_to_conversion_p95')
        .setName('Time to Conversion (95%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Commercial');

    fields
        .newMetric()
        .setId('time_to_conversion_p99')
        .setName('Time to Conversion (99%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Commercial');

    fields
        .newMetric()
        .setId('time_spent_avg')
        .setName('Time Spent (Avg.)')
        .setType(types.DURATION)
        .setAggregation(aggregations.AUTO)
        .setGroup('Time Spent');

    fields
        .newMetric()
        .setId('time_spent_p25')
        .setName('Time Spent (25%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Time Spent');

    fields
        .newMetric()
        .setId('time_spent_p50')
        .setName('Time Spent (50%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Time Spent');

    fields
        .newMetric()
        .setId('time_spent_p75')
        .setName('Time Spent (75%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Time Spent');

    fields
        .newMetric()
        .setId('time_spent_p95')
        .setName('Time Spent (95%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Time Spent');

    fields
        .newMetric()
        .setId('time_spent_p99')
        .setName('Time Spent (99%)')
        .setType(types.DURATION)
        .setIsReaggregatable(false)
        .setGroup('Time Spent');

    return fields;
}

function getDimensionMapping(request) {

    var key = getApiKey();

    var baseURL = 'https://api.scoby.io/v2/stats/dimensions';
    var options = {
        'method' : 'GET',
        'headers': {
            'x-api-key': key,
            'Content-Type': 'application/json'
        },
        'muteHttpExceptions':true
    };
    var response = UrlFetchApp.fetch(baseURL, options);
    var rows = JSON.parse(response.getContentText());

    var mapper = {};

    for(var row of rows) {
        mapper[row.key] = (function(row){
            return function (value) {
                if(row.mapping[value]) {
                    return row.mapping[value]
                }

                if(value != 0 && !!value === true) {
                    return value
                }

                return 'Unknown'
            }
        })(row)
    }

    return mapper;
}

function isDimensionSelected(request) {
    if(request.fields && request.fields.length > 0) {
        var fields = getFields().forIds(request.fields.map(field => field.name))
        for(var field of fields.asArray()) {
            if(field.isDimension()) {
                return true;
            }
        }
    }
    return false
}

// https://developers.google.com/datastudio/connector/reference#getschema
function getSchema(request) {

    var availableFieldIds = []
    for(var field of getFields().asArray()) {
        if(field.isMetric()) {
            availableFieldIds.push(field.getId());
        }

        if(field.isDimension() && !isDimensionSelected(request)) {
            availableFieldIds.push(field.getId());
        }
    }

    var schema = {schema: getFields().forIds(availableFieldIds).build()}

    return schema;
}

function getRequestedFields(request) {
    var requestedFieldIds = request.fields.map(function(field) {
        return field.name;
    });
    var requestedFields = getFields().forIds(requestedFieldIds);
    return requestedFields
}

function getReportConfig(request) {

    var dimensions = [];
    var metrics = []

    getFields().asArray().forEach(field => {
        if(field.isDimension()) {
            dimensions.push(field.getId())
        }

        if(field.isMetric()) {
            metrics.push(field.getId())
        }
    })

    var dimensions = request.fields.filter(field => dimensions.includes(field.name)).map(field => field.name);
    var metrics = request.fields.filter(field => metrics.includes(field.name)).map(field => field.name);

    if(dimensions.length > 1) {
        DataStudioApp.createCommunityConnector()
            .newUserError()
            .setDebugText('The current functionality of the Scoby Analytics API only allows for the analysis of data with a single dimension. Multiple dimensions are not supported at this time.')
            .setText('The current functionality of the Scoby Analytics API only allows for the analysis of data with a single dimension. Multiple dimensions are not supported at this time.')
            .throwException();
    }

    var startDate = request.dateRange.startDate;
    var endDate = request.dateRange.endDate;

    return {
        dimension: dimensions.shift(),
        metrics,
        startDate,
        endDate
    }
}

function getAppId(apiKey) {
    try {
        var decoded = Utilities.base64Decode(apiKey);
        var [appId] = Utilities.newBlob(decoded).getDataAsString().split("|")
        return appId;
    } catch(e) {
        DataStudioApp.createCommunityConnector()
            .newUserError()
            .setDebugText('API Key could not be decoded: ' + e)
            .setText('Your Scoby Analytics API Key is invalid. Please check your input or contact Support if you need further assistance.')
            .throwException();
    }
}

function getField(id) {
    return getFields().forIds([id]).asArray().shift()
}

function mapMetric(metric, value) {
    var field = getField(metric);
    switch(field.getType().toString()) {
        case 'DURATION':
            // https://stackoverflow.com/a/66085774
            value = (value === null) ? null : Number.parseInt(value).toString();
            break;
        case 'PERCENT':
            value = value = +value.toFixed(5);
            break;
    }

    return value
}

// https://developers.google.com/datastudio/connector/reference#getdata
function getData(request) {

    var apiKey = getApiKey()

    var config = getReportConfig(request);

    startDate = request.dateRange.startDate; // '2023-04-06';
    endDate = request.dateRange.endDate; // '2023-04-16';

    var response;
    try {
        response = UrlFetchApp.fetch("https://api.scoby.io/v2/stats/traffic", {
            headers: {
                'x-api-key': apiKey,
            },
            muteHttpExceptions: true,
            method : 'post',
            contentType: 'application/json',
            payload : JSON.stringify({
                appId: getAppId(apiKey),
                startDate,
                endDate,
                dimension: config.dimension || undefined,
                metrics: config.metrics,
                filters:{}
            })
        });
    } catch (e) {
        DataStudioApp.createCommunityConnector()
            .newUserError()
            .setDebugText('Error fetching data from scoby. Exception details: ' + e)
            .setText('There was an error communicating with Scoby Analytics. Try again later, or file an issue if this error persists.')
            .throwException();
    }

    const responseObj = JSON.parse(response.getContentText());
    var mapping = getDimensionMapping(request);

    var data;
    if(responseObj.length) {
        data = responseObj.map(function(item) {
            var row = [];
            var field = getField(config.dimension);
            var dimension;
            switch(field.getType().toString()) {
                case 'YEAR_MONTH_DAY':
                    dimension = Utilities.formatDate(new Date(item['dimension']), "UTC", "yyyyMMdd")
                    break;
                default:
                    dimension = item['dimension'];
            }
            row.push(mapping[config.dimension](dimension));
            config.metrics.forEach(function (metric) {
                var value = item[metric];
                return row.push(mapMetric(metric, value));
            });
            return { values: row };
        });

    } else {
        var row = []
        config.metrics.forEach(function (metric) {
            var value = responseObj[metric];
            return row.push(mapMetric(metric, value));
        });

        data = [{ values: row }]
    }

    return {
        schema: getRequestedFields(request).build(),
        rows: data
    }
}

function isAdminUser() {
    return false;
}

function isAuthValid() {
    return false;
}

function validateKey(key) {
    var isValid = false

    try {
        isValid = !!getAppId(key)
    } catch(e) {}

    return isValid;
}

// https://developers.google.com/looker-studio/connector/auth#setcredentials
function setCredentials(request) {
    var key = request.key;

    var validKey = validateKey(key);
    if (!validKey) {
        return {
            errorCode: 'INVALID_CREDENTIALS'
        };
    }
    var userProperties = PropertiesService.getUserProperties();
    userProperties.setProperty('scoby.apiKey', key);
    return {
        errorCode: 'NONE'
    };
}

// https://developers.google.com/looker-studio/connector/auth#isauthvalid
function isAuthValid() {
    var key = getApiKey();
    return validateKey(key);
}

// https://developers.google.com/looker-studio/connector/auth#resetauth
function resetAuth() {
    var userProperties = PropertiesService.getUserProperties();
    userProperties.deleteProperty('scoby.apiKey');
}
