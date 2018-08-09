const data = [
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON SJC9 - 3rd Shift" },
    "locations.name": { value: "AMAZON SJC9" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+SJC9+-+3rd+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+SJC9+-+3rd+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON SJC9 - 2nd Shift" },
    "locations.name": { value: "AMAZON SJC9" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+SJC9+-+2nd+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+SJC9+-+2nd+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON SJC9 - 1st Shift" },
    "locations.name": { value: "AMAZON SJC9" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+SJC9+-+1st+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+SJC9+-+1st+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ORD6 - 3rd Shift" },
    "locations.name": { value: "AMAZON ORD6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ORD6+-+3rd+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ORD6+-+3rd+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ORD6 - 2nd Shift" },
    "locations.name": { value: "AMAZON ORD6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ORD6+-+2nd+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ORD6+-+2nd+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ORD6 - 1st Shift" },
    "locations.name": { value: "AMAZON ORD6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ORD6+-+1st+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ORD6+-+1st+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ONT8 - 3rd Shift" },
    "locations.name": { value: "AMAZON ONT8" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ONT8+-+3rd+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ONT8+-+3rd+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ONT8 - 2nd Shift" },
    "locations.name": { value: "AMAZON ONT8" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ONT8+-+2nd+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ONT8+-+2nd+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ONT8 - 1st Shift" },
    "locations.name": { value: "AMAZON ONT8" },
    "location_alerts.expected_punch_count": {
      value: 8,
      links: [
        {
          label: "Show All 8",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ONT8+-+1st+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ONT8+-+1st+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ONT4 - 1st Shift" },
    "locations.name": { value: "AMAZON ONT4" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ONT4+-+1st+Shift&f[locations.name]=AMAZON+ONT4&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ONT4+-+1st+Shift&f[locations.name]=AMAZON+ONT4&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON MIA6 - 3rd Shift" },
    "locations.name": { value: "AMAZON MIA6" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+MIA6+-+3rd+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+MIA6+-+3rd+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON MIA6 - 2nd Shift" },
    "locations.name": { value: "AMAZON MIA6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+MIA6+-+2nd+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+MIA6+-+2nd+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON MIA6 - 1st Shift" },
    "locations.name": { value: "AMAZON MIA6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+MIA6+-+1st+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+MIA6+-+1st+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB8 - 3rd Shift" },
    "locations.name": { value: "AMAZON LGB8" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB8+-+3rd+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB8+-+3rd+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB8 - 2nd Shift" },
    "locations.name": { value: "AMAZON LGB8" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB8+-+2nd+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB8+-+2nd+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB8 - 1st Shift" },
    "locations.name": { value: "AMAZON LGB8" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB8+-+1st+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB8+-+1st+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB6 - 3rd Shift" },
    "locations.name": { value: "AMAZON LGB6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB6+-+3rd+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB6+-+3rd+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB6 - 2nd Shift" },
    "locations.name": { value: "AMAZON LGB6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB6+-+2nd+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB6+-+2nd+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB6 - 1st Shift" },
    "locations.name": { value: "AMAZON LGB6" },
    "location_alerts.expected_punch_count": {
      value: 7,
      links: [
        {
          label: "Show All 7",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB6+-+1st+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB6+-+1st+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB3 - 3rd Shift" },
    "locations.name": { value: "AMAZON LGB3" },
    "location_alerts.expected_punch_count": {
      value: 17,
      links: [
        {
          label: "Show All 17",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB3+-+3rd+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB3+-+3rd+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB3 - 2nd Shift" },
    "locations.name": { value: "AMAZON LGB3" },
    "location_alerts.expected_punch_count": {
      value: 15,
      links: [
        {
          label: "Show All 15",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB3+-+2nd+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB3+-+2nd+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB3 - 1st Shift" },
    "locations.name": { value: "AMAZON LGB3" },
    "location_alerts.expected_punch_count": {
      value: 20,
      links: [
        {
          label: "Show All 20",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB3+-+1st+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LGB3+-+1st+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LAX6 - 3rd Shift" },
    "locations.name": { value: "AMAZON LAX6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LAX6+-+3rd+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LAX6+-+3rd+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LAX6 - 2nd Shift" },
    "locations.name": { value: "AMAZON LAX6" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LAX6+-+2nd+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LAX6+-+2nd+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LAX6 - 1st Shift" },
    "locations.name": { value: "AMAZON LAX6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LAX6+-+1st+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+LAX6+-+1st+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW6 - 3rd Shift" },
    "locations.name": { value: "AMAZON FTW6" },
    "location_alerts.expected_punch_count": {
      value: 18,
      links: [
        {
          label: "Show All 18",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW6+-+3rd+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW6+-+3rd+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW6 - 2nd Shift" },
    "locations.name": { value: "AMAZON FTW6" },
    "location_alerts.expected_punch_count": {
      value: 18,
      links: [
        {
          label: "Show All 18",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW6+-+2nd+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW6+-+2nd+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW6 - 1st Shift" },
    "locations.name": { value: "AMAZON FTW6" },
    "location_alerts.expected_punch_count": {
      value: 19,
      links: [
        {
          label: "Show All 19",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW6+-+1st+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW6+-+1st+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW2 - 3rd Shift" },
    "locations.name": { value: "AMAZON FTW2" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW2+-+3rd+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW2+-+3rd+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW2 - 2nd Shift" },
    "locations.name": { value: "AMAZON FTW2" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW2+-+2nd+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW2+-+2nd+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW2 - 1st Shift" },
    "locations.name": { value: "AMAZON FTW2" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW2+-+1st+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+FTW2+-+1st+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON EWR6 - 3rd Shift" },
    "locations.name": { value: "AMAZON EWR6" },
    "location_alerts.expected_punch_count": {
      value: 7,
      links: [
        {
          label: "Show All 7",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+EWR6+-+3rd+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+EWR6+-+3rd+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON EWR6 - 2nd Shift" },
    "locations.name": { value: "AMAZON EWR6" },
    "location_alerts.expected_punch_count": {
      value: 9,
      links: [
        {
          label: "Show All 9",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+EWR6+-+2nd+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+EWR6+-+2nd+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON EWR6 - 1st Shift" },
    "locations.name": { value: "AMAZON EWR6" },
    "location_alerts.expected_punch_count": {
      value: 10,
      links: [
        {
          label: "Show All 10",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+EWR6+-+1st+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+EWR6+-+1st+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW7 - 3rd Shift" },
    "locations.name": { value: "AMAZON DFW7" },
    "location_alerts.expected_punch_count": {
      value: 19,
      links: [
        {
          label: "Show All 19",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW7+-+3rd+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW7+-+3rd+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW7 - 2nd Shift" },
    "locations.name": { value: "AMAZON DFW7" },
    "location_alerts.expected_punch_count": {
      value: 20,
      links: [
        {
          label: "Show All 20",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW7+-+2nd+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW7+-+2nd+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW7 - 1st Shift" },
    "locations.name": { value: "AMAZON DFW7" },
    "location_alerts.expected_punch_count": {
      value: 19,
      links: [
        {
          label: "Show All 19",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW7+-+1st+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW7+-+1st+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW6 - 3rd Shift" },
    "locations.name": { value: "AMAZON DFW6" },
    "location_alerts.expected_punch_count": {
      value: 10,
      links: [
        {
          label: "Show All 10",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW6+-+3rd+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW6+-+3rd+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW6 - 2nd Shift" },
    "locations.name": { value: "AMAZON DFW6" },
    "location_alerts.expected_punch_count": {
      value: 11,
      links: [
        {
          label: "Show All 11",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW6+-+2nd+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW6+-+2nd+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW6 - 1st Shift" },
    "locations.name": { value: "AMAZON DFW6" },
    "location_alerts.expected_punch_count": {
      value: 11,
      links: [
        {
          label: "Show All 11",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW6+-+1st+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DFW6+-+1st+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DEN6 - 3rd Shift" },
    "locations.name": { value: "AMAZON DEN6" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DEN6+-+3rd+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DEN6+-+3rd+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DEN6 - 2nd Shift" },
    "locations.name": { value: "AMAZON DEN6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DEN6+-+2nd+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DEN6+-+2nd+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.67, rendered: "0.67" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DEN6 - 1st Shift" },
    "locations.name": { value: "AMAZON DEN6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DEN6+-+1st+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DEN6+-+1st+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DAL6 - 3rd Shift" },
    "locations.name": { value: "AMAZON DAL6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DAL6+-+3rd+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DAL6+-+3rd+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DAL6 - 2nd Shift" },
    "locations.name": { value: "AMAZON DAL6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DAL6+-+2nd+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DAL6+-+2nd+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DAL6 - 1st Shift" },
    "locations.name": { value: "AMAZON DAL6" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DAL6+-+1st+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+DAL6+-+1st+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BWI6 - 3rd Shift" },
    "locations.name": { value: "AMAZON BWI6" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BWI6+-+3rd+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BWI6+-+3rd+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BWI6 - 2nd Shift" },
    "locations.name": { value: "AMAZON BWI6" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BWI6+-+2nd+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BWI6+-+2nd+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BWI6 - 1st Shift" },
    "locations.name": { value: "AMAZON BWI6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BWI6+-+1st+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BWI6+-+1st+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BOS6 - 3rd Shift" },
    "locations.name": { value: "AMAZON BOS6" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BOS6+-+3rd+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BOS6+-+3rd+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BOS6 - 2nd Shift" },
    "locations.name": { value: "AMAZON BOS6" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BOS6+-+2nd+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BOS6+-+2nd+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BOS6 - 1st Shift" },
    "locations.name": { value: "AMAZON BOS6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BOS6+-+1st+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BOS6+-+1st+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI6 - 3rd Shift" },
    "locations.name": { value: "AMAZON BFI6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI6+-+3rd+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI6+-+3rd+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI6 - 2nd Shift" },
    "locations.name": { value: "AMAZON BFI6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI6+-+2nd+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI6+-+2nd+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI6 - 1st Shift" },
    "locations.name": { value: "AMAZON BFI6" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI6+-+1st+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI6+-+1st+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI3 - 3rd Shift" },
    "locations.name": { value: "AMAZON BFI3" },
    "location_alerts.expected_punch_count": {
      value: 7,
      links: [
        {
          label: "Show All 7",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI3+-+3rd+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI3+-+3rd+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI3 - 2nd Shift" },
    "locations.name": { value: "AMAZON BFI3" },
    "location_alerts.expected_punch_count": {
      value: 10,
      links: [
        {
          label: "Show All 10",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI3+-+2nd+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI3+-+2nd+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI3 - 1st Shift" },
    "locations.name": { value: "AMAZON BFI3" },
    "location_alerts.expected_punch_count": {
      value: 10,
      links: [
        {
          label: "Show All 10",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI3+-+1st+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+BFI3+-+1st+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ATL9 - 3rd Shift" },
    "locations.name": { value: "AMAZON ATL9" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ATL9+-+3rd+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ATL9+-+3rd+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ATL9 - 2nd Shift" },
    "locations.name": { value: "AMAZON ATL9" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ATL9+-+2nd+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ATL9+-+2nd+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-07",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-07"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ATL9 - 1st Shift" },
    "locations.name": { value: "AMAZON ATL9" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ATL9+-+1st+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-07&f[location_alerts.shift]=AMAZON+ATL9+-+1st+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON SJC9 - 3rd Shift" },
    "locations.name": { value: "AMAZON SJC9" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+SJC9+-+3rd+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+SJC9+-+3rd+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON SJC9 - 2nd Shift" },
    "locations.name": { value: "AMAZON SJC9" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+SJC9+-+2nd+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+SJC9+-+2nd+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON SJC9 - 1st Shift" },
    "locations.name": { value: "AMAZON SJC9" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+SJC9+-+1st+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+SJC9+-+1st+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ORD6 - 3rd Shift" },
    "locations.name": { value: "AMAZON ORD6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ORD6+-+3rd+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ORD6+-+3rd+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ORD6 - 2nd Shift" },
    "locations.name": { value: "AMAZON ORD6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ORD6+-+2nd+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ORD6+-+2nd+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ORD6 - 1st Shift" },
    "locations.name": { value: "AMAZON ORD6" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ORD6+-+1st+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ORD6+-+1st+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ONT8 - 3rd Shift" },
    "locations.name": { value: "AMAZON ONT8" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ONT8+-+3rd+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ONT8+-+3rd+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ONT8 - 2nd Shift" },
    "locations.name": { value: "AMAZON ONT8" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ONT8+-+2nd+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ONT8+-+2nd+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ONT8 - 1st Shift" },
    "locations.name": { value: "AMAZON ONT8" },
    "location_alerts.expected_punch_count": {
      value: 8,
      links: [
        {
          label: "Show All 8",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ONT8+-+1st+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ONT8+-+1st+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ONT4 - 1st Shift" },
    "locations.name": { value: "AMAZON ONT4" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ONT4+-+1st+Shift&f[locations.name]=AMAZON+ONT4&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ONT4+-+1st+Shift&f[locations.name]=AMAZON+ONT4&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON MIA6 - 3rd Shift" },
    "locations.name": { value: "AMAZON MIA6" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+MIA6+-+3rd+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+MIA6+-+3rd+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON MIA6 - 2nd Shift" },
    "locations.name": { value: "AMAZON MIA6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+MIA6+-+2nd+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+MIA6+-+2nd+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON MIA6 - 1st Shift" },
    "locations.name": { value: "AMAZON MIA6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+MIA6+-+1st+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+MIA6+-+1st+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB8 - 3rd Shift" },
    "locations.name": { value: "AMAZON LGB8" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB8+-+3rd+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB8+-+3rd+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB8 - 2nd Shift" },
    "locations.name": { value: "AMAZON LGB8" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB8+-+2nd+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB8+-+2nd+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB8 - 1st Shift" },
    "locations.name": { value: "AMAZON LGB8" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB8+-+1st+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB8+-+1st+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB6 - 3rd Shift" },
    "locations.name": { value: "AMAZON LGB6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB6+-+3rd+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB6+-+3rd+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB6 - 2nd Shift" },
    "locations.name": { value: "AMAZON LGB6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB6+-+2nd+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB6+-+2nd+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB6 - 1st Shift" },
    "locations.name": { value: "AMAZON LGB6" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB6+-+1st+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB6+-+1st+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB3 - 3rd Shift" },
    "locations.name": { value: "AMAZON LGB3" },
    "location_alerts.expected_punch_count": {
      value: 18,
      links: [
        {
          label: "Show All 18",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB3+-+3rd+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB3+-+3rd+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB3 - 2nd Shift" },
    "locations.name": { value: "AMAZON LGB3" },
    "location_alerts.expected_punch_count": {
      value: 16,
      links: [
        {
          label: "Show All 16",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB3+-+2nd+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB3+-+2nd+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB3 - 1st Shift" },
    "locations.name": { value: "AMAZON LGB3" },
    "location_alerts.expected_punch_count": {
      value: 19,
      links: [
        {
          label: "Show All 19",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB3+-+1st+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LGB3+-+1st+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LAX6 - 3rd Shift" },
    "locations.name": { value: "AMAZON LAX6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LAX6+-+3rd+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LAX6+-+3rd+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LAX6 - 2nd Shift" },
    "locations.name": { value: "AMAZON LAX6" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LAX6+-+2nd+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LAX6+-+2nd+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LAX6 - 1st Shift" },
    "locations.name": { value: "AMAZON LAX6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LAX6+-+1st+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+LAX6+-+1st+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW6 - 3rd Shift" },
    "locations.name": { value: "AMAZON FTW6" },
    "location_alerts.expected_punch_count": {
      value: 21,
      links: [
        {
          label: "Show All 21",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW6+-+3rd+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW6+-+3rd+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW6 - 2nd Shift" },
    "locations.name": { value: "AMAZON FTW6" },
    "location_alerts.expected_punch_count": {
      value: 16,
      links: [
        {
          label: "Show All 16",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW6+-+2nd+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW6+-+2nd+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW6 - 1st Shift" },
    "locations.name": { value: "AMAZON FTW6" },
    "location_alerts.expected_punch_count": {
      value: 21,
      links: [
        {
          label: "Show All 21",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW6+-+1st+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW6+-+1st+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW2 - 3rd Shift" },
    "locations.name": { value: "AMAZON FTW2" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW2+-+3rd+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW2+-+3rd+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW2 - 2nd Shift" },
    "locations.name": { value: "AMAZON FTW2" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW2+-+2nd+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW2+-+2nd+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW2 - 1st Shift" },
    "locations.name": { value: "AMAZON FTW2" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW2+-+1st+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+FTW2+-+1st+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON EWR6 - 3rd Shift" },
    "locations.name": { value: "AMAZON EWR6" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+EWR6+-+3rd+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+EWR6+-+3rd+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON EWR6 - 2nd Shift" },
    "locations.name": { value: "AMAZON EWR6" },
    "location_alerts.expected_punch_count": {
      value: 9,
      links: [
        {
          label: "Show All 9",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+EWR6+-+2nd+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+EWR6+-+2nd+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON EWR6 - 1st Shift" },
    "locations.name": { value: "AMAZON EWR6" },
    "location_alerts.expected_punch_count": {
      value: 11,
      links: [
        {
          label: "Show All 11",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+EWR6+-+1st+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+EWR6+-+1st+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW7 - 3rd Shift" },
    "locations.name": { value: "AMAZON DFW7" },
    "location_alerts.expected_punch_count": {
      value: 18,
      links: [
        {
          label: "Show All 18",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW7+-+3rd+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW7+-+3rd+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW7 - 2nd Shift" },
    "locations.name": { value: "AMAZON DFW7" },
    "location_alerts.expected_punch_count": {
      value: 22,
      links: [
        {
          label: "Show All 22",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW7+-+2nd+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW7+-+2nd+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW7 - 1st Shift" },
    "locations.name": { value: "AMAZON DFW7" },
    "location_alerts.expected_punch_count": {
      value: 21,
      links: [
        {
          label: "Show All 21",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW7+-+1st+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW7+-+1st+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW6 - 3rd Shift" },
    "locations.name": { value: "AMAZON DFW6" },
    "location_alerts.expected_punch_count": {
      value: 11,
      links: [
        {
          label: "Show All 11",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW6+-+3rd+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW6+-+3rd+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW6 - 2nd Shift" },
    "locations.name": { value: "AMAZON DFW6" },
    "location_alerts.expected_punch_count": {
      value: 10,
      links: [
        {
          label: "Show All 10",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW6+-+2nd+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW6+-+2nd+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW6 - 1st Shift" },
    "locations.name": { value: "AMAZON DFW6" },
    "location_alerts.expected_punch_count": {
      value: 10,
      links: [
        {
          label: "Show All 10",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW6+-+1st+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DFW6+-+1st+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DEN6 - 3rd Shift" },
    "locations.name": { value: "AMAZON DEN6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DEN6+-+3rd+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DEN6+-+3rd+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DEN6 - 2nd Shift" },
    "locations.name": { value: "AMAZON DEN6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DEN6+-+2nd+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DEN6+-+2nd+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DEN6 - 1st Shift" },
    "locations.name": { value: "AMAZON DEN6" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DEN6+-+1st+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DEN6+-+1st+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DAL6 - 3rd Shift" },
    "locations.name": { value: "AMAZON DAL6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DAL6+-+3rd+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DAL6+-+3rd+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DAL6 - 2nd Shift" },
    "locations.name": { value: "AMAZON DAL6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DAL6+-+2nd+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DAL6+-+2nd+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DAL6 - 1st Shift" },
    "locations.name": { value: "AMAZON DAL6" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DAL6+-+1st+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+DAL6+-+1st+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BWI6 - 3rd Shift" },
    "locations.name": { value: "AMAZON BWI6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BWI6+-+3rd+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BWI6+-+3rd+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BWI6 - 2nd Shift" },
    "locations.name": { value: "AMAZON BWI6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BWI6+-+2nd+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BWI6+-+2nd+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BWI6 - 1st Shift" },
    "locations.name": { value: "AMAZON BWI6" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BWI6+-+1st+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BWI6+-+1st+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BOS6 - 3rd Shift" },
    "locations.name": { value: "AMAZON BOS6" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BOS6+-+3rd+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BOS6+-+3rd+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BOS6 - 2nd Shift" },
    "locations.name": { value: "AMAZON BOS6" },
    "location_alerts.expected_punch_count": {
      value: 1,
      links: [
        {
          label: "Show All 1",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BOS6+-+2nd+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BOS6+-+2nd+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BOS6 - 1st Shift" },
    "locations.name": { value: "AMAZON BOS6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BOS6+-+1st+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BOS6+-+1st+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI6 - 3rd Shift" },
    "locations.name": { value: "AMAZON BFI6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI6+-+3rd+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI6+-+3rd+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI6 - 2nd Shift" },
    "locations.name": { value: "AMAZON BFI6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI6+-+2nd+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI6+-+2nd+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI6 - 1st Shift" },
    "locations.name": { value: "AMAZON BFI6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI6+-+1st+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI6+-+1st+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI3 - 3rd Shift" },
    "locations.name": { value: "AMAZON BFI3" },
    "location_alerts.expected_punch_count": {
      value: 7,
      links: [
        {
          label: "Show All 7",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI3+-+3rd+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI3+-+3rd+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI3 - 2nd Shift" },
    "locations.name": { value: "AMAZON BFI3" },
    "location_alerts.expected_punch_count": {
      value: 12,
      links: [
        {
          label: "Show All 12",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI3+-+2nd+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI3+-+2nd+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI3 - 1st Shift" },
    "locations.name": { value: "AMAZON BFI3" },
    "location_alerts.expected_punch_count": {
      value: 10,
      links: [
        {
          label: "Show All 10",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI3+-+1st+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+BFI3+-+1st+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ATL9 - 3rd Shift" },
    "locations.name": { value: "AMAZON ATL9" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ATL9+-+3rd+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ATL9+-+3rd+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ATL9 - 2nd Shift" },
    "locations.name": { value: "AMAZON ATL9" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ATL9+-+2nd+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ATL9+-+2nd+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-08",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-08"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ATL9 - 1st Shift" },
    "locations.name": { value: "AMAZON ATL9" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ATL9+-+1st+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-08&f[location_alerts.shift]=AMAZON+ATL9+-+1st+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON SJC9 - 1st Shift" },
    "locations.name": { value: "AMAZON SJC9" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+SJC9+-+1st+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+SJC9+-+1st+Shift&f[locations.name]=AMAZON+SJC9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.6, rendered: "0.6" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ORD6 - 1st Shift" },
    "locations.name": { value: "AMAZON ORD6" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+ORD6+-+1st+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+ORD6+-+1st+Shift&f[locations.name]=AMAZON+ORD6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.6, rendered: "0.6" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ONT8 - 1st Shift" },
    "locations.name": { value: "AMAZON ONT8" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+ONT8+-+1st+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+ONT8+-+1st+Shift&f[locations.name]=AMAZON+ONT8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON MIA6 - 1st Shift" },
    "locations.name": { value: "AMAZON MIA6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+MIA6+-+1st+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+MIA6+-+1st+Shift&f[locations.name]=AMAZON+MIA6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB8 - 1st Shift" },
    "locations.name": { value: "AMAZON LGB8" },
    "location_alerts.expected_punch_count": {
      value: 5,
      links: [
        {
          label: "Show All 5",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+LGB8+-+1st+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+LGB8+-+1st+Shift&f[locations.name]=AMAZON+LGB8&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB6 - 1st Shift" },
    "locations.name": { value: "AMAZON LGB6" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+LGB6+-+1st+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+LGB6+-+1st+Shift&f[locations.name]=AMAZON+LGB6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.67, rendered: "0.67" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LGB3 - 1st Shift" },
    "locations.name": { value: "AMAZON LGB3" },
    "location_alerts.expected_punch_count": {
      value: 17,
      links: [
        {
          label: "Show All 17",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+LGB3+-+1st+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+LGB3+-+1st+Shift&f[locations.name]=AMAZON+LGB3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.76, rendered: "0.76" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON LAX6 - 1st Shift" },
    "locations.name": { value: "AMAZON LAX6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+LAX6+-+1st+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+LAX6+-+1st+Shift&f[locations.name]=AMAZON+LAX6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW6 - 1st Shift" },
    "locations.name": { value: "AMAZON FTW6" },
    "location_alerts.expected_punch_count": {
      value: 18,
      links: [
        {
          label: "Show All 18",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+FTW6+-+1st+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    "location_alerts.missing_punch_count": {
      value: 8,
      links: [
        {
          label: "Show All 8",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+FTW6+-+1st+Shift&f[locations.name]=AMAZON+FTW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.56, rendered: "0.56" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON FTW2 - 1st Shift" },
    "locations.name": { value: "AMAZON FTW2" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+FTW2+-+1st+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+FTW2+-+1st+Shift&f[locations.name]=AMAZON+FTW2&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.67, rendered: "0.67" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON EWR6 - 1st Shift" },
    "locations.name": { value: "AMAZON EWR6" },
    "location_alerts.expected_punch_count": {
      value: 9,
      links: [
        {
          label: "Show All 9",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+EWR6+-+1st+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+EWR6+-+1st+Shift&f[locations.name]=AMAZON+EWR6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW7 - 1st Shift" },
    "locations.name": { value: "AMAZON DFW7" },
    "location_alerts.expected_punch_count": {
      value: 21,
      links: [
        {
          label: "Show All 21",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+DFW7+-+1st+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+DFW7+-+1st+Shift&f[locations.name]=AMAZON+DFW7&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.95, rendered: "0.95" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DFW6 - 1st Shift" },
    "locations.name": { value: "AMAZON DFW6" },
    "location_alerts.expected_punch_count": {
      value: 9,
      links: [
        {
          label: "Show All 9",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+DFW6+-+1st+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+DFW6+-+1st+Shift&f[locations.name]=AMAZON+DFW6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DEN6 - 1st Shift" },
    "locations.name": { value: "AMAZON DEN6" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+DEN6+-+1st+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+DEN6+-+1st+Shift&f[locations.name]=AMAZON+DEN6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON DAL6 - 1st Shift" },
    "locations.name": { value: "AMAZON DAL6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+DAL6+-+1st+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+DAL6+-+1st+Shift&f[locations.name]=AMAZON+DAL6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.5, rendered: "0.5" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BWI6 - 1st Shift" },
    "locations.name": { value: "AMAZON BWI6" },
    "location_alerts.expected_punch_count": {
      value: 4,
      links: [
        {
          label: "Show All 4",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+BWI6+-+1st+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+BWI6+-+1st+Shift&f[locations.name]=AMAZON+BWI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BOS6 - 1st Shift" },
    "locations.name": { value: "AMAZON BOS6" },
    "location_alerts.expected_punch_count": {
      value: 2,
      links: [
        {
          label: "Show All 2",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+BOS6+-+1st+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+BOS6+-+1st+Shift&f[locations.name]=AMAZON+BOS6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI6 - 1st Shift" },
    "locations.name": { value: "AMAZON BFI6" },
    "location_alerts.expected_punch_count": {
      value: 6,
      links: [
        {
          label: "Show All 6",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+BFI6+-+1st+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+BFI6+-+1st+Shift&f[locations.name]=AMAZON+BFI6&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 0.67, rendered: "0.67" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON BFI3 - 1st Shift" },
    "locations.name": { value: "AMAZON BFI3" },
    "location_alerts.expected_punch_count": {
      value: 9,
      links: [
        {
          label: "Show All 9",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+BFI3+-+1st+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+BFI3+-+1st+Shift&f[locations.name]=AMAZON+BFI3&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.pseudo_local_expected_punch_date": {
      value: "2018-08-09",
      links: [
        {
          label: "by Pseudo Local Expected Punch Time",
          url:
            "/explore/Attendance/location_alerts?fields=location_alerts.pseudo_local_expected_punch_time,location_alerts.shift,locations.name,location_alerts.expected_punch_count,location_alerts.missing_punch_count&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[locations.name]=&f[locations.location_type]=&sorts=location_alerts.pseudo_local_expected_punch_date,location_alerts.shift desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22table_calculation%22%3A%22attendance_percentage%22%2C%22label%22%3A%22Attendance+Percentage%22%2C%22expression%22%3A%22round%28%28%24%7Blocation_alerts.expected_punch_count%7D+-%24%7Blocation_alerts.missing_punch_count%7D%29%2F%28%24%7Blocation_alerts.expected_punch_count%7D%29%2C+2%29%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22_kind_hint%22%3A%22measure%22%2C%22_type_hint%22%3A%22number%22%7D%5D",
          type: "drill",
          type_label: "Drill into 2018-08-09"
        }
      ]
    },
    "location_alerts.shift": { value: "AMAZON ATL9 - 1st Shift" },
    "locations.name": { value: "AMAZON ATL9" },
    "location_alerts.expected_punch_count": {
      value: 3,
      links: [
        {
          label: "Show All 3",
          url:
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+ATL9+-+1st+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
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
            "/explore/Attendance/location_alerts?fields=locations.customer_id,locations.name&f[location_alerts.pseudo_local_expected_punch_date]=2018-08-09&f[location_alerts.shift]=AMAZON+ATL9+-+1st+Shift&f[locations.name]=AMAZON+ATL9&limit=500",
          type: "measure_default"
        }
      ]
    },
    attendance_percentage: { value: 1, rendered: "1" }
  }
];
const queryResponse = {"supports_pivot_in_db":true,"null_sort_treatment":"high","expired":false,"ran_at":"2018-08-09T13:38:08+00:00","runtime":"0.075","sql":"SELECT \n\tDATE(location_alerts.pseudo_local_expected_punch_at ) AS \"location_alerts.pseudo_local_expected_punch_date\",\n\tlocations.name || ' - ' || (CASE\n    WHEN location_alerts.pseudo_local_expected_punch_at::time > '3:00:00'::time\n     AND location_alerts.pseudo_local_expected_punch_at::time <= '11:00:00'::time\n    THEN '1st Shift'\n    WHEN location_alerts.pseudo_local_expected_punch_at::time > '11:00:00'::time\n     AND location_alerts.pseudo_local_expected_punch_at::time <= '19:00:00'::time\n    THEN '2nd Shift'\n    ELSE '3rd Shift'\n  END) AS \"location_alerts.shift\",\n\tlocations.name  AS \"locations.name\",\n\tCOALESCE(SUM(location_alerts.expected_punch_count ), 0) AS \"location_alerts.expected_punch_count\",\n\tCOALESCE(SUM(location_alerts.missing_punch_count ), 0) AS \"location_alerts.missing_punch_count\"\nFROM public.location_alerts  AS location_alerts\nINNER JOIN public.locations  AS locations ON location_alerts.location_id = locations.id \nINNER JOIN public.parent_customer_groups  AS parent_customer_groups ON locations.parent_group_src_id = parent_customer_groups.src_id\n\nWHERE ((((location_alerts.pseudo_local_expected_punch_at ) >= ((SELECT (DATE_TRUNC('day', CURRENT_TIMESTAMP) + (-2 || ' day')::INTERVAL))) AND (location_alerts.pseudo_local_expected_punch_at ) < ((SELECT ((DATE_TRUNC('day', CURRENT_TIMESTAMP) + (-2 || ' day')::INTERVAL) + (3 || ' day')::INTERVAL)))))) AND (parent_customer_groups.src_id  = 1210)\nGROUP BY 1,2,3\nORDER BY 1 ,2 DESC\nLIMIT 500","sql_explain":"EXPLAIN SELECT \n\tDATE(location_alerts.pseudo_local_expected_punch_at ) AS \"location_alerts.pseudo_local_expected_punch_date\",\n\tlocations.name || ' - ' || (CASE\n    WHEN location_alerts.pseudo_local_expected_punch_at::time > '3:00:00'::time\n     AND location_alerts.pseudo_local_expected_punch_at::time <= '11:00:00'::time\n    THEN '1st Shift'\n    WHEN location_alerts.pseudo_local_expected_punch_at::time > '11:00:00'::time\n     AND location_alerts.pseudo_local_expected_punch_at::time <= '19:00:00'::time\n    THEN '2nd Shift'\n    ELSE '3rd Shift'\n  END) AS \"location_alerts.shift\",\n\tlocations.name  AS \"locations.name\",\n\tCOALESCE(SUM(location_alerts.expected_punch_count ), 0) AS \"location_alerts.expected_punch_count\",\n\tCOALESCE(SUM(location_alerts.missing_punch_count ), 0) AS \"location_alerts.missing_punch_count\"\nFROM public.location_alerts  AS location_alerts\nINNER JOIN public.locations  AS locations ON location_alerts.location_id = locations.id \nINNER JOIN public.parent_customer_groups  AS parent_customer_groups ON locations.parent_group_src_id = parent_customer_groups.src_id\n\nWHERE ((((location_alerts.pseudo_local_expected_punch_at ) >= ((SELECT (DATE_TRUNC('day', CURRENT_TIMESTAMP) + (-2 || ' day')::INTERVAL))) AND (location_alerts.pseudo_local_expected_punch_at ) < ((SELECT ((DATE_TRUNC('day', CURRENT_TIMESTAMP) + (-2 || ' day')::INTERVAL) + (3 || ' day')::INTERVAL)))))) AND (parent_customer_groups.src_id  = 1210)\nGROUP BY 1,2,3\nORDER BY 1 ,2 DESC\nLIMIT 500","fields":{"measures":[],"dimensions":[{"align":"left","can_filter":true,"category":"dimension","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":"Pseudo Local Expected Punch Date","fill_style":"range","fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":false,"label":"Location Alerts Pseudo Local Expected Punch Date","label_from_parameter":null,"label_short":"Pseudo Local Expected Punch Date","lookml_link":"/projects/Customer_Portal/files/location_alerts.view.lkml?line=122","map_layer":null,"name":"location_alerts.pseudo_local_expected_punch_date","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"date_date","user_attribute_filter_types":["datetime","advanced_filter_datetime"],"value_format":null,"view":"location_alerts","view_label":"Location Alerts","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Date","measure":false,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"location_alerts","source_file":"location_alerts.view.lkml","source_file_path":"Customer_Portal/location_alerts.view.lkml","suggest_dimension":"location_alerts.pseudo_local_expected_punch_date","suggest_explore":"location_alerts","suggestable":false,"is_fiscal":false,"is_timeframe":true,"can_time_filter":false,"time_interval":{"name":"day","count":1},"sql":null,"sql_case":null,"sorted":{"desc":false,"sort_index":0}},{"align":"left","can_filter":true,"category":"dimension","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":null,"fill_style":null,"fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":false,"label":"Location Alerts Shift","label_from_parameter":null,"label_short":"Shift","lookml_link":"/projects/Customer_Portal/files/location_alerts.view.lkml?line=165","map_layer":null,"name":"location_alerts.shift","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"string","user_attribute_filter_types":["string","advanced_filter_string"],"value_format":null,"view":"location_alerts","view_label":"Location Alerts","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Shift","measure":false,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"location_alerts","source_file":"location_alerts.view.lkml","source_file_path":"Customer_Portal/location_alerts.view.lkml","suggest_dimension":"location_alerts.shift","suggest_explore":"location_alerts","suggestable":true,"is_fiscal":false,"is_timeframe":false,"can_time_filter":false,"time_interval":null,"sql":null,"sql_case":null,"sorted":{"desc":true,"sort_index":1}}],"table_calculations":[{"label":"Attendance Percentage","name":"attendance_percentage","expression":"round((${location_alerts.expected_punch_count} -${location_alerts.missing_punch_count})/(${location_alerts.expected_punch_count}), 2)","can_pivot":true,"sortable":true,"type":"number","align":"right","measure":true,"is_table_calculation":true,"dynamic":true,"value_format":null,"is_numeric":true}],"pivots":[],"measure_like":[{"label":"Attendance Percentage","name":"attendance_percentage","expression":"round((${location_alerts.expected_punch_count} -${location_alerts.missing_punch_count})/(${location_alerts.expected_punch_count}), 2)","can_pivot":true,"sortable":true,"type":"number","align":"right","measure":true,"is_table_calculation":true,"dynamic":true,"value_format":null,"is_numeric":true}],"dimension_like":[{"align":"left","can_filter":true,"category":"dimension","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":"Pseudo Local Expected Punch Date","fill_style":"range","fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":false,"label":"Location Alerts Pseudo Local Expected Punch Date","label_from_parameter":null,"label_short":"Pseudo Local Expected Punch Date","lookml_link":"/projects/Customer_Portal/files/location_alerts.view.lkml?line=122","map_layer":null,"name":"location_alerts.pseudo_local_expected_punch_date","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"date_date","user_attribute_filter_types":["datetime","advanced_filter_datetime"],"value_format":null,"view":"location_alerts","view_label":"Location Alerts","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Date","measure":false,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"location_alerts","source_file":"location_alerts.view.lkml","source_file_path":"Customer_Portal/location_alerts.view.lkml","suggest_dimension":"location_alerts.pseudo_local_expected_punch_date","suggest_explore":"location_alerts","suggestable":false,"is_fiscal":false,"is_timeframe":true,"can_time_filter":false,"time_interval":{"name":"day","count":1},"sql":null,"sql_case":null,"sorted":{"desc":false,"sort_index":0}},{"align":"left","can_filter":true,"category":"dimension","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":null,"fill_style":null,"fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":false,"label":"Location Alerts Shift","label_from_parameter":null,"label_short":"Shift","lookml_link":"/projects/Customer_Portal/files/location_alerts.view.lkml?line=165","map_layer":null,"name":"location_alerts.shift","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"string","user_attribute_filter_types":["string","advanced_filter_string"],"value_format":null,"view":"location_alerts","view_label":"Location Alerts","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Shift","measure":false,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"location_alerts","source_file":"location_alerts.view.lkml","source_file_path":"Customer_Portal/location_alerts.view.lkml","suggest_dimension":"location_alerts.shift","suggest_explore":"location_alerts","suggestable":true,"is_fiscal":false,"is_timeframe":false,"can_time_filter":false,"time_interval":null,"sql":null,"sql_case":null,"sorted":{"desc":true,"sort_index":1}}]},"fill_fields":[],"has_totals":false,"has_row_totals":false,"applied_filters":{"location_alerts.pseudo_local_expected_punch_date":{"field":{"align":"left","can_filter":true,"category":"dimension","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":"Pseudo Local Expected Punch Date","fill_style":"range","fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":false,"label":"Location Alerts Pseudo Local Expected Punch Date","label_from_parameter":null,"label_short":"Pseudo Local Expected Punch Date","lookml_link":"/projects/Customer_Portal/files/location_alerts.view.lkml?line=122","map_layer":null,"name":"location_alerts.pseudo_local_expected_punch_date","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"date_date","user_attribute_filter_types":["datetime","advanced_filter_datetime"],"value_format":null,"view":"location_alerts","view_label":"Location Alerts","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Date","measure":false,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"location_alerts","source_file":"location_alerts.view.lkml","source_file_path":"Customer_Portal/location_alerts.view.lkml","suggest_dimension":"location_alerts.pseudo_local_expected_punch_date","suggest_explore":"location_alerts","suggestable":false,"is_fiscal":false,"is_timeframe":true,"can_time_filter":false,"time_interval":{"name":"day","count":1},"sql":null,"sql_case":null},"value":"3 days"}},"applied_filter_expression":null,"explore":{"name":"location_alerts","label":"Location Alerts","description":null},"timezone":"America/Los_Angeles","drill_menu_build_time":0.031727};

const config = {"minColor":"#f66364","midColor":"#f5b04d","maxColor":"#71c989","dataLabels":true,"group":false,"xAxisName":"Date","yAxisName":"Location - Shift","query_fields":{"measures":[{"align":"right","can_filter":true,"category":"measure","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":null,"fill_style":null,"fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":true,"label":"Location Alerts Expected Punch Count","label_from_parameter":null,"label_short":"Expected Punch Count","lookml_link":"/projects/Customer_Portal/files/location_alerts.view.lkml?line=67","map_layer":null,"name":"location_alerts.expected_punch_count","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"sum","user_attribute_filter_types":["number","advanced_filter_number"],"value_format":null,"view":"location_alerts","view_label":"Location Alerts","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Expected Punch Count","measure":true,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"location_alerts","source_file":"location_alerts.view.lkml","source_file_path":"Customer_Portal/location_alerts.view.lkml","suggest_dimension":"location_alerts.expected_punch_count","suggest_explore":"location_alerts","suggestable":false,"is_fiscal":false,"is_timeframe":false,"can_time_filter":false,"time_interval":null,"sql":null,"sql_case":null},{"align":"right","can_filter":true,"category":"measure","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":null,"fill_style":null,"fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":true,"label":"Location Alerts Missing Punch Count","label_from_parameter":null,"label_short":"Missing Punch Count","lookml_link":"/projects/Customer_Portal/files/location_alerts.view.lkml?line=105","map_layer":null,"name":"location_alerts.missing_punch_count","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"sum","user_attribute_filter_types":["number","advanced_filter_number"],"value_format":null,"view":"location_alerts","view_label":"Location Alerts","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Missing Punch Count","measure":true,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"location_alerts","source_file":"location_alerts.view.lkml","source_file_path":"Customer_Portal/location_alerts.view.lkml","suggest_dimension":"location_alerts.missing_punch_count","suggest_explore":"location_alerts","suggestable":false,"is_fiscal":false,"is_timeframe":false,"can_time_filter":false,"time_interval":null,"sql":null,"sql_case":null}],"dimensions":[{"align":"left","can_filter":true,"category":"dimension","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":"Pseudo Local Expected Punch Date","fill_style":"range","fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":false,"label":"Location Alerts Pseudo Local Expected Punch Date","label_from_parameter":null,"label_short":"Pseudo Local Expected Punch Date","lookml_link":"/projects/Customer_Portal/files/location_alerts.view.lkml?line=122","map_layer":null,"name":"location_alerts.pseudo_local_expected_punch_date","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"date_date","user_attribute_filter_types":["datetime","advanced_filter_datetime"],"value_format":null,"view":"location_alerts","view_label":"Location Alerts","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Date","measure":false,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"location_alerts","source_file":"location_alerts.view.lkml","source_file_path":"Customer_Portal/location_alerts.view.lkml","suggest_dimension":"location_alerts.pseudo_local_expected_punch_date","suggest_explore":"location_alerts","suggestable":false,"is_fiscal":false,"is_timeframe":true,"can_time_filter":false,"time_interval":{"name":"day","count":1},"sql":null,"sql_case":null,"sorted":{"desc":false,"sort_index":0}},{"align":"left","can_filter":true,"category":"dimension","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":null,"fill_style":null,"fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":false,"label":"Location Alerts Shift","label_from_parameter":null,"label_short":"Shift","lookml_link":"/projects/Customer_Portal/files/location_alerts.view.lkml?line=165","map_layer":null,"name":"location_alerts.shift","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"string","user_attribute_filter_types":["string","advanced_filter_string"],"value_format":null,"view":"location_alerts","view_label":"Location Alerts","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Shift","measure":false,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"location_alerts","source_file":"location_alerts.view.lkml","source_file_path":"Customer_Portal/location_alerts.view.lkml","suggest_dimension":"location_alerts.shift","suggest_explore":"location_alerts","suggestable":true,"is_fiscal":false,"is_timeframe":false,"can_time_filter":false,"time_interval":null,"sql":null,"sql_case":null,"sorted":{"desc":true,"sort_index":1}},{"align":"left","can_filter":true,"category":"dimension","default_filter_value":null,"description":null,"enumerations":null,"field_group_label":null,"fill_style":null,"fiscal_month_offset":0,"has_allowed_values":false,"hidden":false,"is_filter":false,"is_numeric":false,"label":"Locations Name","label_from_parameter":null,"label_short":"Name","lookml_link":"/projects/Customer_Portal/files/locations.view.lkml?line=124","map_layer":null,"name":"locations.name","permanent":null,"requires_refresh_on_sort":false,"sortable":true,"suggestions":null,"tags":[],"type":"string","user_attribute_filter_types":["string","advanced_filter_string"],"value_format":null,"view":"locations","view_label":"Locations","dynamic":false,"week_start_day":"monday","error":null,"field_group_variant":"Name","measure":false,"parameter":false,"primary_key":false,"project_name":"Customer_Portal","scope":"locations","source_file":"locations.view.lkml","source_file_path":"Customer_Portal/locations.view.lkml","suggest_dimension":"locations.name_suggest","suggest_explore":"locations","suggestable":true,"is_fiscal":false,"is_timeframe":false,"can_time_filter":false,"time_interval":null,"sql":null,"sql_case":null}],"table_calculations":[{"label":"Attendance Percentage","name":"attendance_percentage","expression":"round((${location_alerts.expected_punch_count} -${location_alerts.missing_punch_count})/(${location_alerts.expected_punch_count}), 2)","can_pivot":true,"sortable":true,"type":"number","align":"right","measure":true,"is_table_calculation":true,"dynamic":true,"value_format":null,"is_numeric":true}],"pivots":[]},"type":"kelsus_heatmap"}
function handleErrors() {
  return true;
}

let looker = {
  plugins: {
    visualizations: {
      add: function(viz) {
        viz.create("container");
        viz.update(data, "container", config, queryResponse);
      }
    }
  }
};
