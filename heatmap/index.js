const data = [
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212782" },
    "locations.name": { value: "FTW6" },
    "location_alerts.expected_punch_count": { value: 52 },
    "location_alerts.missing_punch_count": { value: 7 },
    attendance_percentage: { value: 0.87, rendered: "0.87" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212782" },
    "locations.name": { value: "FTW6" },
    "location_alerts.expected_punch_count": { value: 55 },
    "location_alerts.missing_punch_count": { value: 4 },
    attendance_percentage: { value: 0.93, rendered: "0.93" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212737" },
    "locations.name": { value: "BWI6" },
    "location_alerts.expected_punch_count": { value: 11 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0.82, rendered: "0.82" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "213331" },
    "locations.name": { value: "EWR7" },
    "location_alerts.expected_punch_count": { value: 2 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "213331" },
    "locations.name": { value: "EWR7" },
    "location_alerts.expected_punch_count": { value: 2 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "213331" },
    "locations.name": { value: "EWR7" },
    "location_alerts.expected_punch_count": { value: 2 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "213331" },
    "locations.name": { value: "EWR7" },
    "location_alerts.expected_punch_count": { value: 2 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212783" },
    "locations.name": { value: "LGB3" },
    "location_alerts.expected_punch_count": { value: 41 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0.95, rendered: "0.95" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212425" },
    "locations.name": { value: "DFW7" },
    "location_alerts.expected_punch_count": { value: 54 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0.96, rendered: "0.96" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "213331" },
    "locations.name": { value: "EWR7" },
    "location_alerts.expected_punch_count": { value: 2 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0, rendered: "0" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "213712" },
    "locations.name": { value: "FTW2" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0.75, rendered: "0.75" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "213153" },
    "locations.name": { value: "LGB6" },
    "location_alerts.expected_punch_count": { value: 19 },
    "location_alerts.missing_punch_count": { value: 2 },
    attendance_percentage: { value: 0.89, rendered: "0.89" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "213712" },
    "locations.name": { value: "FTW2" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.89, rendered: "0.89" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212783" },
    "locations.name": { value: "LGB3" },
    "location_alerts.expected_punch_count": { value: 39 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.97, rendered: "0.97" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "213712" },
    "locations.name": { value: "FTW2" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.88, rendered: "0.88" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "213712" },
    "locations.name": { value: "FTW2" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.89, rendered: "0.89" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "213712" },
    "locations.name": { value: "FTW2" },
    "location_alerts.expected_punch_count": { value: 7 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.86, rendered: "0.86" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212735" },
    "locations.name": { value: "ATL9" },
    "location_alerts.expected_punch_count": { value: 7 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.86, rendered: "0.86" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212743" },
    "locations.name": { value: "SJC9" },
    "location_alerts.expected_punch_count": { value: 5 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.8, rendered: "0.8" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "211474" },
    "locations.name": { value: "BFI3" },
    "location_alerts.expected_punch_count": { value: 23 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.96, rendered: "0.96" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "211246" },
    "locations.name": { value: "ONT8" },
    "location_alerts.expected_punch_count": { value: 21 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.95, rendered: "0.95" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212610" },
    "locations.name": { value: "BFI6" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 1 },
    attendance_percentage: { value: 0.89, rendered: "0.89" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "213153" },
    "locations.name": { value: "LGB6" },
    "location_alerts.expected_punch_count": { value: 20 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "213729" },
    "locations.name": { value: "ONT4" },
    "location_alerts.expected_punch_count": { value: 1 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "211473" },
    "locations.name": { value: "LGB8" },
    "location_alerts.expected_punch_count": { value: 17 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "211474" },
    "locations.name": { value: "BFI3" },
    "location_alerts.expected_punch_count": { value: 26 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212084" },
    "locations.name": { value: "DFW6" },
    "location_alerts.expected_punch_count": { value: 30 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212272" },
    "locations.name": { value: "LAX6" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212425" },
    "locations.name": { value: "DFW7" },
    "location_alerts.expected_punch_count": { value: 58 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212610" },
    "locations.name": { value: "BFI6" },
    "location_alerts.expected_punch_count": { value: 10 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212611" },
    "locations.name": { value: "DEN6" },
    "location_alerts.expected_punch_count": { value: 5 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212735" },
    "locations.name": { value: "ATL9" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212783" },
    "locations.name": { value: "LGB3" },
    "location_alerts.expected_punch_count": { value: 44 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212738" },
    "locations.name": { value: "DAL6" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "211246" },
    "locations.name": { value: "ONT8" },
    "location_alerts.expected_punch_count": { value: 21 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212739" },
    "locations.name": { value: "EWR6" },
    "location_alerts.expected_punch_count": { value: 27 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212740" },
    "locations.name": { value: "MIA6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212741" },
    "locations.name": { value: "ORD6" },
    "location_alerts.expected_punch_count": { value: 7 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212743" },
    "locations.name": { value: "SJC9" },
    "location_alerts.expected_punch_count": { value: 4 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212782" },
    "locations.name": { value: "FTW6" },
    "location_alerts.expected_punch_count": { value: 56 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-26" },
    "locations.customer_id": { value: "212736" },
    "locations.name": { value: "BOS6" },
    "location_alerts.expected_punch_count": { value: 4 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "213729" },
    "locations.name": { value: "ONT4" },
    "location_alerts.expected_punch_count": { value: 1 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "211474" },
    "locations.name": { value: "BFI3" },
    "location_alerts.expected_punch_count": { value: 24 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "211246" },
    "locations.name": { value: "ONT8" },
    "location_alerts.expected_punch_count": { value: 23 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "211473" },
    "locations.name": { value: "LGB8" },
    "location_alerts.expected_punch_count": { value: 15 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212272" },
    "locations.name": { value: "LAX6" },
    "location_alerts.expected_punch_count": { value: 10 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212425" },
    "locations.name": { value: "DFW7" },
    "location_alerts.expected_punch_count": { value: 61 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212610" },
    "locations.name": { value: "BFI6" },
    "location_alerts.expected_punch_count": { value: 10 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212611" },
    "locations.name": { value: "DEN6" },
    "location_alerts.expected_punch_count": { value: 4 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212735" },
    "locations.name": { value: "ATL9" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212736" },
    "locations.name": { value: "BOS6" },
    "location_alerts.expected_punch_count": { value: 4 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212084" },
    "locations.name": { value: "DFW6" },
    "location_alerts.expected_punch_count": { value: 30 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212738" },
    "locations.name": { value: "DAL6" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212739" },
    "locations.name": { value: "EWR6" },
    "location_alerts.expected_punch_count": { value: 27 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212740" },
    "locations.name": { value: "MIA6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212741" },
    "locations.name": { value: "ORD6" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212743" },
    "locations.name": { value: "SJC9" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212782" },
    "locations.name": { value: "FTW6" },
    "location_alerts.expected_punch_count": { value: 55 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212783" },
    "locations.name": { value: "LGB3" },
    "location_alerts.expected_punch_count": { value: 43 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "213153" },
    "locations.name": { value: "LGB6" },
    "location_alerts.expected_punch_count": { value: 21 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "213712" },
    "locations.name": { value: "FTW2" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-27" },
    "locations.customer_id": { value: "212737" },
    "locations.name": { value: "BWI6" },
    "location_alerts.expected_punch_count": { value: 12 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "213712" },
    "locations.name": { value: "FTW2" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "211246" },
    "locations.name": { value: "ONT8" },
    "location_alerts.expected_punch_count": { value: 17 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "211473" },
    "locations.name": { value: "LGB8" },
    "location_alerts.expected_punch_count": { value: 16 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "211474" },
    "locations.name": { value: "BFI3" },
    "location_alerts.expected_punch_count": { value: 23 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212084" },
    "locations.name": { value: "DFW6" },
    "location_alerts.expected_punch_count": { value: 30 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212272" },
    "locations.name": { value: "LAX6" },
    "location_alerts.expected_punch_count": { value: 11 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212425" },
    "locations.name": { value: "DFW7" },
    "location_alerts.expected_punch_count": { value: 59 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212610" },
    "locations.name": { value: "BFI6" },
    "location_alerts.expected_punch_count": { value: 12 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212611" },
    "locations.name": { value: "DEN6" },
    "location_alerts.expected_punch_count": { value: 3 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212735" },
    "locations.name": { value: "ATL9" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212736" },
    "locations.name": { value: "BOS6" },
    "location_alerts.expected_punch_count": { value: 4 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212737" },
    "locations.name": { value: "BWI6" },
    "location_alerts.expected_punch_count": { value: 12 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212738" },
    "locations.name": { value: "DAL6" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212739" },
    "locations.name": { value: "EWR6" },
    "location_alerts.expected_punch_count": { value: 20 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212740" },
    "locations.name": { value: "MIA6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212741" },
    "locations.name": { value: "ORD6" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212743" },
    "locations.name": { value: "SJC9" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212782" },
    "locations.name": { value: "FTW6" },
    "location_alerts.expected_punch_count": { value: 57 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "212783" },
    "locations.name": { value: "LGB3" },
    "location_alerts.expected_punch_count": { value: 42 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "213153" },
    "locations.name": { value: "LGB6" },
    "location_alerts.expected_punch_count": { value: 20 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-28" },
    "locations.customer_id": { value: "213729" },
    "locations.name": { value: "ONT4" },
    "location_alerts.expected_punch_count": { value: 1 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212736" },
    "locations.name": { value: "BOS6" },
    "location_alerts.expected_punch_count": { value: 4 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212738" },
    "locations.name": { value: "DAL6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "211474" },
    "locations.name": { value: "BFI3" },
    "location_alerts.expected_punch_count": { value: 23 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212084" },
    "locations.name": { value: "DFW6" },
    "location_alerts.expected_punch_count": { value: 28 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212272" },
    "locations.name": { value: "LAX6" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212425" },
    "locations.name": { value: "DFW7" },
    "location_alerts.expected_punch_count": { value: 58 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212610" },
    "locations.name": { value: "BFI6" },
    "location_alerts.expected_punch_count": { value: 12 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212611" },
    "locations.name": { value: "DEN6" },
    "location_alerts.expected_punch_count": { value: 3 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212735" },
    "locations.name": { value: "ATL9" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "211473" },
    "locations.name": { value: "LGB8" },
    "location_alerts.expected_punch_count": { value: 16 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212737" },
    "locations.name": { value: "BWI6" },
    "location_alerts.expected_punch_count": { value: 10 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212739" },
    "locations.name": { value: "EWR6" },
    "location_alerts.expected_punch_count": { value: 27 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212740" },
    "locations.name": { value: "MIA6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212741" },
    "locations.name": { value: "ORD6" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212743" },
    "locations.name": { value: "SJC9" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "212782" },
    "locations.name": { value: "FTW6" },
    "location_alerts.expected_punch_count": { value: 55 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "213153" },
    "locations.name": { value: "LGB6" },
    "location_alerts.expected_punch_count": { value: 17 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "213729" },
    "locations.name": { value: "ONT4" },
    "location_alerts.expected_punch_count": { value: 1 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-29" },
    "locations.customer_id": { value: "211246" },
    "locations.name": { value: "ONT8" },
    "location_alerts.expected_punch_count": { value: 18 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212740" },
    "locations.name": { value: "MIA6" },
    "location_alerts.expected_punch_count": { value: 4 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212741" },
    "locations.name": { value: "ORD6" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212739" },
    "locations.name": { value: "EWR6" },
    "location_alerts.expected_punch_count": { value: 27 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212783" },
    "locations.name": { value: "LGB3" },
    "location_alerts.expected_punch_count": { value: 41 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "213153" },
    "locations.name": { value: "LGB6" },
    "location_alerts.expected_punch_count": { value: 16 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212738" },
    "locations.name": { value: "DAL6" },
    "location_alerts.expected_punch_count": { value: 7 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212737" },
    "locations.name": { value: "BWI6" },
    "location_alerts.expected_punch_count": { value: 10 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212736" },
    "locations.name": { value: "BOS6" },
    "location_alerts.expected_punch_count": { value: 3 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "211246" },
    "locations.name": { value: "ONT8" },
    "location_alerts.expected_punch_count": { value: 18 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212735" },
    "locations.name": { value: "ATL9" },
    "location_alerts.expected_punch_count": { value: 7 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "211473" },
    "locations.name": { value: "LGB8" },
    "location_alerts.expected_punch_count": { value: 14 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "211474" },
    "locations.name": { value: "BFI3" },
    "location_alerts.expected_punch_count": { value: 27 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212611" },
    "locations.name": { value: "DEN6" },
    "location_alerts.expected_punch_count": { value: 3 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212610" },
    "locations.name": { value: "BFI6" },
    "location_alerts.expected_punch_count": { value: 12 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212084" },
    "locations.name": { value: "DFW6" },
    "location_alerts.expected_punch_count": { value: 25 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212272" },
    "locations.name": { value: "LAX6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212425" },
    "locations.name": { value: "DFW7" },
    "location_alerts.expected_punch_count": { value: 54 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212743" },
    "locations.name": { value: "SJC9" },
    "location_alerts.expected_punch_count": { value: 3 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-06-30" },
    "locations.customer_id": { value: "212782" },
    "locations.name": { value: "FTW6" },
    "location_alerts.expected_punch_count": { value: 53 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212743" },
    "locations.name": { value: "SJC9" },
    "location_alerts.expected_punch_count": { value: 4 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212611" },
    "locations.name": { value: "DEN6" },
    "location_alerts.expected_punch_count": { value: 2 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "211473" },
    "locations.name": { value: "LGB8" },
    "location_alerts.expected_punch_count": { value: 14 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "211474" },
    "locations.name": { value: "BFI3" },
    "location_alerts.expected_punch_count": { value: 27 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212084" },
    "locations.name": { value: "DFW6" },
    "location_alerts.expected_punch_count": { value: 25 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212272" },
    "locations.name": { value: "LAX6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212425" },
    "locations.name": { value: "DFW7" },
    "location_alerts.expected_punch_count": { value: 55 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212610" },
    "locations.name": { value: "BFI6" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212736" },
    "locations.name": { value: "BOS6" },
    "location_alerts.expected_punch_count": { value: 3 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212737" },
    "locations.name": { value: "BWI6" },
    "location_alerts.expected_punch_count": { value: 10 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212738" },
    "locations.name": { value: "DAL6" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212739" },
    "locations.name": { value: "EWR6" },
    "location_alerts.expected_punch_count": { value: 24 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212740" },
    "locations.name": { value: "MIA6" },
    "location_alerts.expected_punch_count": { value: 5 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212741" },
    "locations.name": { value: "ORD6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "211246" },
    "locations.name": { value: "ONT8" },
    "location_alerts.expected_punch_count": { value: 19 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "212783" },
    "locations.name": { value: "LGB3" },
    "location_alerts.expected_punch_count": { value: 39 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-01" },
    "locations.customer_id": { value: "213153" },
    "locations.name": { value: "LGB6" },
    "location_alerts.expected_punch_count": { value: 17 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212735" },
    "locations.name": { value: "ATL9" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212737" },
    "locations.name": { value: "BWI6" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212739" },
    "locations.name": { value: "EWR6" },
    "location_alerts.expected_punch_count": { value: 26 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212740" },
    "locations.name": { value: "MIA6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212741" },
    "locations.name": { value: "ORD6" },
    "location_alerts.expected_punch_count": { value: 8 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212736" },
    "locations.name": { value: "BOS6" },
    "location_alerts.expected_punch_count": { value: 4 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212738" },
    "locations.name": { value: "DAL6" },
    "location_alerts.expected_punch_count": { value: 9 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212611" },
    "locations.name": { value: "DEN6" },
    "location_alerts.expected_punch_count": { value: 5 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212272" },
    "locations.name": { value: "LAX6" },
    "location_alerts.expected_punch_count": { value: 6 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "212084" },
    "locations.name": { value: "DFW6" },
    "location_alerts.expected_punch_count": { value: 27 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "211473" },
    "locations.name": { value: "LGB8" },
    "location_alerts.expected_punch_count": { value: 14 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  },
  {
    "location_alerts.expected_punch_date": { value: "2018-07-02" },
    "locations.customer_id": { value: "213729" },
    "locations.name": { value: "ONT4" },
    "location_alerts.expected_punch_count": { value: 1 },
    "location_alerts.missing_punch_count": { value: 0 },
    attendance_percentage: { value: 1, rendered: "1" }
  }
];

const queryResponse = {
  supports_pivot_in_db: true,
  null_sort_treatment: "high",
  expired: false,
  ran_at: "2018-07-02T23:04:15+00:00",
  runtime: "1.473",
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
        sorted: { desc: false, sort_index: 1 }
      },
      {
        align: "left",
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
        is_numeric: false,
        label: "Locations Name",
        label_from_parameter: null,
        label_short: "Name",
        lookml_link:
          "/projects/myfirstproject/files/locations.view.lkml?line=116",
        map_layer: null,
        name: "locations.name",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "string",
        user_attribute_filter_types: ["string", "advanced_filter_string"],
        value_format: null,
        view: "locations",
        view_label: "Locations",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Name",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "locations",
        source_file: "locations.view.lkml",
        source_file_path: "myfirstproject/locations.view.lkml",
        suggest_dimension: "locations.name",
        suggest_explore: "location_alerts",
        suggestable: true,
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
        label: "Attendance Percentage",
        name: "attendance_percentage",
        expression:
          "round((${location_alerts.expected_punch_count} -${location_alerts.missing_punch_count})/(${location_alerts.expected_punch_count}), 2)",
        can_pivot: true,
        sortable: true,
        type: "number",
        align: "right",
        measure: true,
        is_table_calculation: true,
        dynamic: true,
        value_format: null,
        is_numeric: true
      }
    ],
    pivots: [],
    measure_like: [
      {
        label: "Attendance Percentage",
        name: "attendance_percentage",
        expression:
          "round((${location_alerts.expected_punch_count} -${location_alerts.missing_punch_count})/(${location_alerts.expected_punch_count}), 2)",
        can_pivot: true,
        sortable: true,
        type: "number",
        align: "right",
        measure: true,
        is_table_calculation: true,
        dynamic: true,
        value_format: null,
        is_numeric: true
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
        sorted: { desc: false, sort_index: 1 }
      },
      {
        align: "left",
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
        is_numeric: false,
        label: "Locations Name",
        label_from_parameter: null,
        label_short: "Name",
        lookml_link:
          "/projects/myfirstproject/files/locations.view.lkml?line=116",
        map_layer: null,
        name: "locations.name",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "string",
        user_attribute_filter_types: ["string", "advanced_filter_string"],
        value_format: null,
        view: "locations",
        view_label: "Locations",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Name",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "locations",
        source_file: "locations.view.lkml",
        source_file_path: "myfirstproject/locations.view.lkml",
        suggest_dimension: "locations.name",
        suggest_explore: "location_alerts",
        suggestable: true,
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
  has_totals: false,
  has_row_totals: false,
  applied_filters: {
    "location_alerts.expected_punch_date": {
      field: {
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
        sql_case: null
      },
      value: "7 days"
    }
  },
  applied_filter_expression: null,
  explore: {
    name: "location_alerts",
    label: "Location Alerts",
    description: null
  },
  timezone: "America/Los_Angeles",
  drill_menu_build_time: 0
};

const config = {
  midColor: "#fcedbf",
  minColor: "#c97489",
  maxColor: "#7aaa85",
  dataLabels: true,
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
        sql_case: null,
        sorted: { desc: true, sort_index: 0 }
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
        sorted: { desc: false, sort_index: 1 }
      },
      {
        align: "left",
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
        is_numeric: false,
        label: "Locations Customer ID",
        label_from_parameter: null,
        label_short: "Customer ID",
        lookml_link:
          "/projects/myfirstproject/files/locations.view.lkml?line=71",
        map_layer: null,
        name: "locations.customer_id",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "string",
        user_attribute_filter_types: ["string", "advanced_filter_string"],
        value_format: null,
        view: "locations",
        view_label: "Locations",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Customer ID",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "locations",
        source_file: "locations.view.lkml",
        source_file_path: "myfirstproject/locations.view.lkml",
        suggest_dimension: "locations.customer_id",
        suggest_explore: "location_alerts",
        suggestable: true,
        is_fiscal: false,
        is_timeframe: false,
        can_time_filter: false,
        time_interval: null,
        sql: null,
        sql_case: null
      },
      {
        align: "left",
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
        is_numeric: false,
        label: "Locations Name",
        label_from_parameter: null,
        label_short: "Name",
        lookml_link:
          "/projects/myfirstproject/files/locations.view.lkml?line=116",
        map_layer: null,
        name: "locations.name",
        permanent: null,
        requires_refresh_on_sort: false,
        sortable: true,
        suggestions: null,
        tags: [],
        type: "string",
        user_attribute_filter_types: ["string", "advanced_filter_string"],
        value_format: null,
        view: "locations",
        view_label: "Locations",
        dynamic: false,
        week_start_day: "monday",
        error: null,
        field_group_variant: "Name",
        measure: false,
        parameter: false,
        primary_key: false,
        project_name: "myfirstproject",
        scope: "locations",
        source_file: "locations.view.lkml",
        source_file_path: "myfirstproject/locations.view.lkml",
        suggest_dimension: "locations.name",
        suggest_explore: "location_alerts",
        suggestable: true,
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
        label: "Attendance Percentage",
        name: "attendance_percentage",
        expression:
          "round((${location_alerts.expected_punch_count} -${location_alerts.missing_punch_count})/(${location_alerts.expected_punch_count}), 2)",
        can_pivot: true,
        sortable: true,
        type: "number",
        align: "right",
        measure: true,
        is_table_calculation: true,
        dynamic: true,
        value_format: null,
        is_numeric: true
      }
    ],
    pivots: []
  },
  type: "kelsus_heatmap"
};

function handleErrors() {
  return true;
}

let looker = {
  plugins: {
    visualizations: {
      add: function(viz) {
        let options = {};
        for (option in viz.options) {
          options[option] = viz.options[option].default;
        }
        viz.create("container");
        viz.update(
          data,
          "container",
          Object.assign(options, config),
          queryResponse
        );
      }
    }
  }
};
