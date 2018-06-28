const data = [
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-28",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-28&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-28"
        }
      ]
    },
    "location_alerts.location_id": { value: 20659 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-28&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-28&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-28",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-28&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-28"
        }
      ]
    },
    "location_alerts.location_id": { value: 21438 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-28&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-28&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-27",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-27&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-27"
        }
      ]
    },
    "location_alerts.location_id": { value: 20653 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-27&f[location_alerts.location_id]=20653&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-27&f[location_alerts.location_id]=20653&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-27",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-27&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-27"
        }
      ]
    },
    "location_alerts.location_id": { value: 20659 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-27&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-27&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-27",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-27&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-27"
        }
      ]
    },
    "location_alerts.location_id": { value: 21438 },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-27&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-27&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-26",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-26&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-26"
        }
      ]
    },
    "location_alerts.location_id": { value: 20659 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-26&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-26&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-26",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-26&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-26"
        }
      ]
    },
    "location_alerts.location_id": { value: 21438 },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-26&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-26&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-25",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-25&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-25"
        }
      ]
    },
    "location_alerts.location_id": { value: 20659 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-25&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-25&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-25",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-25&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-25"
        }
      ]
    },
    "location_alerts.location_id": { value: 21438 },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-25&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-25&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-24",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-24&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-24"
        }
      ]
    },
    "location_alerts.location_id": { value: 20659 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-24&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-24&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-24",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-24&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-24"
        }
      ]
    },
    "location_alerts.location_id": { value: 21438 },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-24&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-24&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-23",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-23&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-23"
        }
      ]
    },
    "location_alerts.location_id": { value: 20653 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-23&f[location_alerts.location_id]=20653&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-23&f[location_alerts.location_id]=20653&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-23",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-23&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-23"
        }
      ]
    },
    "location_alerts.location_id": { value: 20659 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-23&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-23&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-23",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-23&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-23"
        }
      ]
    },
    "location_alerts.location_id": { value: 21438 },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-23&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-23&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-22",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-22&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-22"
        }
      ]
    },
    "location_alerts.location_id": { value: 20653 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-22&f[location_alerts.location_id]=20653&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-22&f[location_alerts.location_id]=20653&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-22",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-22&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-22"
        }
      ]
    },
    "location_alerts.location_id": { value: 20659 },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-22&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-22&f[location_alerts.location_id]=20659&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": {
      value: "2018-06-22",
      links: [
        {
          label: "by Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.expected_punch_time,location_alerts.location_id,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.expected_punch_date]=2018-06-22&f[location_alerts.location_id]=21438%2C20653%2C20659&sorts=location_alerts.expected_punch_date desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22percentage%22%2C%22label%22%3A%22Percentage%22%2C%22expression%22%3A%22%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-06-22"
        }
      ]
    },
    "location_alerts.location_id": { value: 21438 },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-22&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 0,
      links: [
        {
          label: "Show All 0",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.expected_punch_date]=2018-06-22&f[location_alerts.location_id]=21438&limit=500",
          type: "measure_default"
        }
      ]
    },
    percentage: { value: 1, rendered: "1" }
  }
];

const queryResponse = {
  parent_id: "01ae399a244718003d083465c0a66306",
  sql_changed: true,
  added_params: null,
  drill_menu_build_time: 0.02669,
  expired: false,
  fields: {
    measures: [],
    dimensions: [
      {
        align: "left",
        can_filter: true,
        category: "dimension",
        default_filter_value: null,
        description: null,
        enumerations: null,
        field_group_label: "Expected Punch Date",
        fill_style: "range",
        fiscal_month_offset: 0,
        has_allowed_values: false,
        hidden: false,
        is_filter: false,
        is_numeric: false,
        label: "Location Alerts Expected Punch Date",
        label_from_parameter: null,
        label_short: "Expected Punch Date",
        lookml_link:
          "/projects/myfirstproject/files/location_alerts.view.lkml?line=53",
        map_layer: null,
        name: "location_alerts.expected_punch_date",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "date_date",
        user_attribute_filter_types: ["datetime", "advanced_filter_datetime"],
        value_format: null,
        view: "location_alerts",
        view_label: "Location Alerts",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Date",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "location_alerts",
        source_file: "location_alerts.view.lkml",
        source_file_path: "myfirstproject/location_alerts.view.lkml",
        suggest_dimension: "location_alerts.expected_punch_date",
        suggest_explore: "location_alerts",
        suggestable: false,
        is_fiscal: false,
        is_timeframe: true,
        can_time_filter: false,
        time_interval: { name: "day", count: 1 },
        sql: null,
        sql_case: null,
        sorted: { desc: true, sort_index: 0 }
      },
      {
        align: "right",
        can_filter: true,
        category: "dimension",
        default_filter_value: null,
        description: null,
        enumerations: null,
        field_group_label: null,
        fill_style: null,
        fiscal_month_offset: 0,
        has_allowed_values: false,
        hidden: false,
        is_filter: false,
        is_numeric: true,
        label: "Location Alerts Location ID",
        label_from_parameter: null,
        label_short: "Location ID",
        lookml_link:
          "/projects/myfirstproject/files/location_alerts.view.lkml?line=99",
        map_layer: null,
        name: "location_alerts.location_id",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "number",
        user_attribute_filter_types: ["number", "advanced_filter_number"],
        value_format: null,
        view: "location_alerts",
        view_label: "Location Alerts",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Location ID",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "location_alerts",
        source_file: "location_alerts.view.lkml",
        source_file_path: "myfirstproject/location_alerts.view.lkml",
        suggest_dimension: "location_alerts.location_id",
        suggest_explore: "location_alerts",
        suggestable: false,
        is_fiscal: false,
        is_timeframe: false,
        can_time_filter: false,
        time_interval: null,
        sql: null,
        sql_case: null
      }
    ],
    table_calculations: [
      {
        label: "Percentage",
        name: "percentage",
        expression:
          "(${location_alerts.expected_punch_count} -${location_alerts.missing_punch_count})/(${location_alerts.expected_punch_count})",
        can_pivot: true,
        sortable: true,
        type: "number",
        align: "right",
        measure: true,
        is_table_calculation: true,
        dynamic: true,
        value_format: null,
        is_numeric: true,
        $$hashKey: "object:1781"
      }
    ],
    pivots: [],
    measure_like: [
      {
        label: "Percentage",
        name: "percentage",
        expression:
          "(${location_alerts.expected_punch_count} -${location_alerts.missing_punch_count})/(${location_alerts.expected_punch_count})",
        can_pivot: true,
        sortable: true,
        type: "number",
        align: "right",
        measure: true,
        is_table_calculation: true,
        dynamic: true,
        value_format: null,
        is_numeric: true,
        $$hashKey: "object:1781"
      }
    ],
    dimension_like: [
      {
        align: "left",
        can_filter: true,
        category: "dimension",
        default_filter_value: null,
        description: null,
        enumerations: null,
        field_group_label: "Expected Punch Date",
        fill_style: "range",
        fiscal_month_offset: 0,
        has_allowed_values: false,
        hidden: false,
        is_filter: false,
        is_numeric: false,
        label: "Location Alerts Expected Punch Date",
        label_from_parameter: null,
        label_short: "Expected Punch Date",
        lookml_link:
          "/projects/myfirstproject/files/location_alerts.view.lkml?line=53",
        map_layer: null,
        name: "location_alerts.expected_punch_date",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "date_date",
        user_attribute_filter_types: ["datetime", "advanced_filter_datetime"],
        value_format: null,
        view: "location_alerts",
        view_label: "Location Alerts",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Date",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "location_alerts",
        source_file: "location_alerts.view.lkml",
        source_file_path: "myfirstproject/location_alerts.view.lkml",
        suggest_dimension: "location_alerts.expected_punch_date",
        suggest_explore: "location_alerts",
        suggestable: false,
        is_fiscal: false,
        is_timeframe: true,
        can_time_filter: false,
        time_interval: { name: "day", count: 1 },
        sql: null,
        sql_case: null,
        sorted: { desc: true, sort_index: 0 }
      },
      {
        align: "right",
        can_filter: true,
        category: "dimension",
        default_filter_value: null,
        description: null,
        enumerations: null,
        field_group_label: null,
        fill_style: null,
        fiscal_month_offset: 0,
        has_allowed_values: false,
        hidden: false,
        is_filter: false,
        is_numeric: true,
        label: "Location Alerts Location ID",
        label_from_parameter: null,
        label_short: "Location ID",
        lookml_link:
          "/projects/myfirstproject/files/location_alerts.view.lkml?line=99",
        map_layer: null,
        name: "location_alerts.location_id",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "number",
        user_attribute_filter_types: ["number", "advanced_filter_number"],
        value_format: null,
        view: "location_alerts",
        view_label: "Location Alerts",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Location ID",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "location_alerts",
        source_file: "location_alerts.view.lkml",
        source_file_path: "myfirstproject/location_alerts.view.lkml",
        suggest_dimension: "location_alerts.location_id",
        suggest_explore: "location_alerts",
        suggestable: false,
        is_fiscal: false,
        is_timeframe: false,
        can_time_filter: false,
        time_interval: null,
        sql: null,
        sql_case: null
      }
    ]
  },
  fill_fields: [],
  has_row_totals: false,
  has_totals: false,
  id: "query-result-7",
  null_sort_treatment: "high",
  ran_at: "2018-06-28T16:36:18+00:00",
  runtime: "0.091",
  sql:
    "SELECT \n\tDATE(location_alerts.expected_punch_at ) AS \"location_alerts.expected_punch_date\",\n\tlocation_alerts.location_id  AS \"location_alerts.location_id\",\n\tCOALESCE(SUM(location_alerts.expected_punch_count ), 0) AS \"location_alerts.expected_punch_count\",\n\tCOALESCE(SUM(location_alerts.missing_punch_count ), 0) AS \"location_alerts.missing_punch_count\"\nFROM public.location_alerts  AS location_alerts\n\nWHERE ((((location_alerts.expected_punch_at ) >= ((SELECT (DATE_TRUNC('day', CURRENT_TIMESTAMP) + (-6 || ' day')::INTERVAL))) AND (location_alerts.expected_punch_at ) < ((SELECT ((DATE_TRUNC('day', CURRENT_TIMESTAMP) + (-6 || ' day')::INTERVAL) + (7 || ' day')::INTERVAL)))))) AND (location_alerts.location_id  IN (21438,20653,20659))\nGROUP BY 1,2\nORDER BY 1 DESC\nLIMIT 500",
  sql_explain:
    "EXPLAIN SELECT \n\tDATE(location_alerts.expected_punch_at ) AS \"location_alerts.expected_punch_date\",\n\tlocation_alerts.location_id  AS \"location_alerts.location_id\",\n\tCOALESCE(SUM(location_alerts.expected_punch_count ), 0) AS \"location_alerts.expected_punch_count\",\n\tCOALESCE(SUM(location_alerts.missing_punch_count ), 0) AS \"location_alerts.missing_punch_count\"\nFROM public.location_alerts  AS location_alerts\n\nWHERE ((((location_alerts.expected_punch_at ) >= ((SELECT (DATE_TRUNC('day', CURRENT_TIMESTAMP) + (-6 || ' day')::INTERVAL))) AND (location_alerts.expected_punch_at ) < ((SELECT ((DATE_TRUNC('day', CURRENT_TIMESTAMP) + (-6 || ' day')::INTERVAL) + (7 || ' day')::INTERVAL)))))) AND (location_alerts.location_id  IN (21438,20653,20659))\nGROUP BY 1,2\nORDER BY 1 DESC\nLIMIT 500",
  supports_pivot_in_db: true,
  timezone: "America/Los_Angeles",
  is_local: true,
  table_calcs_complete: true,
  tracked_attributes: {
    "result.drill_menu_build_time": 0.02669,
    "result.from_cache": true,
    "result.runtime": "0.091",
    "result.sql.length": 775,
    "result.supports_pivot_in_db": true
  }
};

const config = {
  query_fields: {
    measures: [
      {
        align: "right",
        can_filter: true,
        category: "measure",
        default_filter_value: null,
        description: null,
        enumerations: null,
        field_group_label: null,
        fill_style: null,
        fiscal_month_offset: 0,
        has_allowed_values: false,
        hidden: false,
        is_filter: false,
        is_numeric: true,
        label: "Location Alerts Expected Punch Count",
        label_from_parameter: null,
        label_short: "Expected Punch Count",
        lookml_link:
          "/projects/myfirstproject/files/location_alerts.view.lkml?line=67",
        map_layer: null,
        name: "location_alerts.expected_punch_count",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "sum",
        user_attribute_filter_types: ["number", "advanced_filter_number"],
        value_format: null,
        view: "location_alerts",
        view_label: "Location Alerts",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Expected Punch Count",
        measure: true,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "location_alerts",
        source_file: "location_alerts.view.lkml",
        source_file_path: "myfirstproject/location_alerts.view.lkml",
        suggest_dimension: "location_alerts.expected_punch_count",
        suggest_explore: "location_alerts",
        suggestable: false,
        is_fiscal: false,
        is_timeframe: false,
        can_time_filter: false,
        time_interval: null,
        sql: null,
        sql_case: null
      },
      {
        align: "right",
        can_filter: true,
        category: "measure",
        default_filter_value: null,
        description: null,
        enumerations: null,
        field_group_label: null,
        fill_style: null,
        fiscal_month_offset: 0,
        has_allowed_values: false,
        hidden: false,
        is_filter: false,
        is_numeric: true,
        label: "Location Alerts Missing Punch Count",
        label_from_parameter: null,
        label_short: "Missing Punch Count",
        lookml_link:
          "/projects/myfirstproject/files/location_alerts.view.lkml?line=105",
        map_layer: null,
        name: "location_alerts.missing_punch_count",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "sum",
        user_attribute_filter_types: ["number", "advanced_filter_number"],
        value_format: null,
        view: "location_alerts",
        view_label: "Location Alerts",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Missing Punch Count",
        measure: true,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "location_alerts",
        source_file: "location_alerts.view.lkml",
        source_file_path: "myfirstproject/location_alerts.view.lkml",
        suggest_dimension: "location_alerts.missing_punch_count",
        suggest_explore: "location_alerts",
        suggestable: false,
        is_fiscal: false,
        is_timeframe: false,
        can_time_filter: false,
        time_interval: null,
        sql: null,
        sql_case: null
      }
    ],
    dimensions: [
      {
        align: "left",
        can_filter: true,
        category: "dimension",
        default_filter_value: null,
        description: null,
        enumerations: null,
        field_group_label: "Expected Punch Date",
        fill_style: "range",
        fiscal_month_offset: 0,
        has_allowed_values: false,
        hidden: false,
        is_filter: false,
        is_numeric: false,
        label: "Location Alerts Expected Punch Date",
        label_from_parameter: null,
        label_short: "Expected Punch Date",
        lookml_link:
          "/projects/myfirstproject/files/location_alerts.view.lkml?line=53",
        map_layer: null,
        name: "location_alerts.expected_punch_date",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "date_date",
        user_attribute_filter_types: ["datetime", "advanced_filter_datetime"],
        value_format: null,
        view: "location_alerts",
        view_label: "Location Alerts",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Date",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "location_alerts",
        source_file: "location_alerts.view.lkml",
        source_file_path: "myfirstproject/location_alerts.view.lkml",
        suggest_dimension: "location_alerts.expected_punch_date",
        suggest_explore: "location_alerts",
        suggestable: false,
        is_fiscal: false,
        is_timeframe: true,
        can_time_filter: false,
        time_interval: { name: "day", count: 1 },
        sql: null,
        sql_case: null,
        sorted: { desc: true, sort_index: 0 }
      },
      {
        align: "right",
        can_filter: true,
        category: "dimension",
        default_filter_value: null,
        description: null,
        enumerations: null,
        field_group_label: null,
        fill_style: null,
        fiscal_month_offset: 0,
        has_allowed_values: false,
        hidden: false,
        is_filter: false,
        is_numeric: true,
        label: "Location Alerts Location ID",
        label_from_parameter: null,
        label_short: "Location ID",
        lookml_link:
          "/projects/myfirstproject/files/location_alerts.view.lkml?line=99",
        map_layer: null,
        name: "location_alerts.location_id",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "number",
        user_attribute_filter_types: ["number", "advanced_filter_number"],
        value_format: null,
        view: "location_alerts",
        view_label: "Location Alerts",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Location ID",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "location_alerts",
        source_file: "location_alerts.view.lkml",
        source_file_path: "myfirstproject/location_alerts.view.lkml",
        suggest_dimension: "location_alerts.location_id",
        suggest_explore: "location_alerts",
        suggestable: false,
        is_fiscal: false,
        is_timeframe: false,
        can_time_filter: false,
        time_interval: null,
        sql: null,
        sql_case: null
      }
    ],
    table_calculations: [
      {
        label: "Percentage",
        name: "percentage",
        expression:
          "(${location_alerts.expected_punch_count} -${location_alerts.missing_punch_count})/(${location_alerts.expected_punch_count})",
        can_pivot: true,
        sortable: true,
        type: "number",
        align: "right",
        measure: true,
        is_table_calculation: true,
        dynamic: true,
        value_format: null,
        is_numeric: true,
        $$hashKey: "object:1781"
      }
    ],
    pivots: []
  },
  type: "Heatmap_2"
};

var viz = {
  id: "highcharts_heatmap",
  label: "Heatmap",
  options: {
    chartName: {
      section: "Chart",
      label: "Chart Name",
      type: "string"
    },
    minColor: {
      section: "Chart",
      type: "string",
      label: "Minimum Color",
      display: "color",
      default: "#fee8c8"
    },
    maxColor: {
      section: "Chart",
      type: "string",
      label: "Maximum Color",
      display: "color",
      default: "#e34a33"
    },
    dataLabels: {
      section: "Chart",
      type: "boolean",
      label: "Data Labels",
      default: true
    },
    xAxisName: {
      label: "Axis Name",
      section: "X",
      type: "string",
      placeholder: "Provide an axis name ..."
    },
    yAxisName: {
      label: "Axis Name",
      section: "Y",
      type: "string",
      placeholder: "Provide an axis name ..."
    }
  },
  // Set up the initial state of the visualization
  create: function(element, config) {
    element.innerHTML = "";
  },
  // Render in response to the data or settings changing
  update: function(data, element, config, queryResponse) {
    // if (
    //   !handleErrors(this, queryResponse, {
    //     min_pivots: 0,
    //     max_pivots: 0,
    //     min_dimensions: 2,
    //     max_dimensions: 2,
    //     min_measures: 1,
    //     max_measures: 1
    //   })
    // )
    //   return;
    let d3 = d3v4;

    let x = queryResponse.fields.dimension_like[0];
    let y = queryResponse.fields.dimension_like[1];
    let z = queryResponse.fields.measure_like[0];

    let zFormat = formatType(z.value_format);

    function aesthetic(datum, field) {
      let value = datum[field.name].value;
      return value;
    }

    function fieldExtent(data, field) {
      let [min, max] = [null, null];
      let categories = null;
      let fieldScale = null;

      categories = d3
        .map(data, function(d) {
          return aesthetic(d, field);
        })
        .keys();
      fieldScale = d3
        .scaleOrdinal()
        .domain(categories)
        .range(d3.range(0, categories.length, 1));
      return {
        min: min,
        max: max,
        categories: categories,
        fieldScale: fieldScale
      };
    }

    let xExtent = fieldExtent(data, x);
    let yExtent = fieldExtent(data, y);

    let [minz, maxz] = d3.extent(data, function(d) {
      return aesthetic(d, z);
    });

    function scaledAesthetic(d, field, fieldScale) {
      let value = aesthetic(d, field);
      if (fieldScale != null) {
        return fieldScale(value);
      }
      return value;
    }

    function aesthetics(d) {
      return [
        scaledAesthetic(d, x, xExtent.fieldScale),
        scaledAesthetic(d, y, yExtent.fieldScale),
        aesthetic(d, z)
      ];
    }

    // [{x: , y:, z:}, ...]
    let series = data.map(aesthetics);

    let options = {
      credits: {
        enabled: false
      },
      chart: {
        type: "heatmap",
        plotBorderWidth: 1
      },
      title: { text: config.chartName },
      legend: { enabled: false },
      xAxis: {
        type: "category",
        title: {
          text: config.xAxisName
            ? config.xAxisName
            : x.label_short
              ? x.label_short
              : x.label
        },
        min: xExtent.min,
        max: xExtent.max,
        categories: xExtent.categories
      },
      yAxis: {
        type: "category",
        title: {
          text: config.yAxisName
            ? config.yAxisName
            : y.label_short
              ? y.label_short
              : y.label
        },
        min: yExtent.min,
        max: yExtent.max,
        categories: yExtent.categories
      },
      colorAxis: {
        min: minz,
        max: maxz,
        stops: [
            [0, '#f66364'],
            [0.5, '#f5b04d'],
            [1, '#71c989']
        ],
      },
      series: [
        {
          data: series,
          borderWidth: 1,
          borderColor: '#bac1c4',
          dataLabels: {
            enabled: config.dataLabels,
            color: "#000000",
            formatter: function() {
              return zFormat(this.point.value);
            }
          },
          tooltip: {
            headerFormat: z.label_short
              ? z.label_short + "<br/>"
              : z.label + "<br/>",
            pointFormatter: function() {
              let x = xExtent.fieldScale ? xExtent.categories[this.x] : this.x;
              let y = yExtent.fieldScale ? yExtent.categories[this.y] : this.y;
              let z = zFormat(this.value);
              return `${x} ${y} <b>${z}</b>`;
            }
          }
        }
      ]
    };

    let myChart = Highcharts.chart(element, options);
  }
};
// looker.plugins.visualizations.add(viz);

viz.create("container");
viz.update(data, "container", config, queryResponse);
