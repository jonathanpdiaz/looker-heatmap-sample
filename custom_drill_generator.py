
def convert_url_to_vis_string(expanded_url):
    """Input an expanded Looker Visualisation URL and this will print
    the relevant url param to generate a custom drill down.
    Note that this function prints the output rather than returning it"""
    from urlparse import urlparse, unquote as unquote
    parsed_url = urlparse(expanded_url)
    query_components = unquote(parsed_url.query).split('&')
    query_dict = {}
    has_filter_config = False
    filter_config_url = ''
    for c in query_components:
        if c[:13] == 'filter_config':
            has_filter_config=True
            filter_config = c[14:].replace("'", '"').replace('"', '\\"')
            filter_config_url = "&filter_config={{ filter_config | encode_uri }}"
        else:
            c = c.split('=')
            query_dict[c[0]] = c[1]
    vis_string = query_dict['vis'].replace("'", '"').replace('"', '\\"')
    try:
        dynamic_fields = query_dict['dynamic_fields']
        dynamic_fields = dynamic_fields.replace("'", '"').replace('"', '\\"')
        table_calc_url = "&dynamic_fields={{ table_calc | replace: '  ', '' | encode_uri }}"
        has_table_calc = True
    except KeyError as e:
        has_table_calc = False
        table_calc_url = ''
    ignores = ['fields', 'vis', 'origin', 'dynamic_fields']
    other_params = ["&{}={}".format(k, v.replace("'", '"').replace('"', '\\"'))
        for k, v in query_dict.items() if k not in ignores and k[:2] != 'f[' and v != '']
    print("url: \"")
    if has_table_calc:
        print("{{% assign table_calc = '{}' %}} ".format(dynamic_fields))
    if has_filter_config:
        print("{{% assign filter_config = '{}' %}} ".format(filter_config))
    print("{% assign vis_config = '")
    lines = vis_string.split(',')
    for line in lines[:-1]:
        print("\t{} ,".format(line))
    print("\t{}' %}}\n\n{{{{ link }}}}&vis_config={{{{ vis_config | encode_uri }}}}"
        "{}{}{}\"".format(lines[-1], ''.join(other_params), filter_config_url, table_calc_url))

convert_url_to_vis_string("https://looker.kbsforce.com/explore/audit_metrics/questions?fields=questions.label,questions.is_non_compliant_count&f[questions.area]=Specialty+Room+-+Meat&f[submissions.submission_date]=2018%2F09%2F17&f[locations.name]=AMAZON+LAX6&sorts=questions.is_non_compliant_count+desc&limit=500&column_limit=50&vis=%7B%22stacking%22%3A%22%22%2C%22colors%22%3A%5B%22%23F16358%22%2C%22%23E0635E%22%2C%22%23D06464%22%2C%22%23BF656B%22%2C%22%23AF6671%22%2C%22%239F6777%22%2C%22%238E687E%22%2C%22%237E6984%22%2C%22%236E6A8A%22%2C%22%235D6B91%22%2C%22%234D6C97%22%2C%22%233D6D9E%22%5D%2C%22show_value_labels%22%3Afalse%2C%22label_density%22%3A25%2C%22legend_position%22%3A%22center%22%2C%22hide_legend%22%3Afalse%2C%22x_axis_gridlines%22%3Afalse%2C%22y_axis_gridlines%22%3Atrue%2C%22show_view_names%22%3Atrue%2C%22point_style%22%3A%22none%22%2C%22series_colors%22%3A%7B%7D%2C%22series_labels%22%3A%7B%22questions.is_non_compliant_count%22%3A%22Non+Compliant%22%7D%2C%22series_types%22%3A%7B%7D%2C%22limit_displayed_rows%22%3Afalse%2C%22y_axes%22%3A%5B%7B%22label%22%3A%22%22%2C%22orientation%22%3A%22bottom%22%2C%22series%22%3A%5B%7B%22id%22%3A%22questions.is_non_compliant_count%22%2C%22name%22%3A%22Non+Compliant%22%2C%22axisId%22%3A%22questions.is_non_compliant_count%22%7D%5D%2C%22showLabels%22%3Atrue%2C%22showValues%22%3Atrue%2C%22unpinAxis%22%3Afalse%2C%22tickDensity%22%3A%22default%22%2C%22tickDensityCustom%22%3A5%2C%22type%22%3A%22linear%22%7D%5D%2C%22y_axis_combined%22%3Atrue%2C%22show_y_axis_labels%22%3Atrue%2C%22show_y_axis_ticks%22%3Atrue%2C%22y_axis_tick_density%22%3A%22default%22%2C%22y_axis_tick_density_custom%22%3A5%2C%22show_x_axis_label%22%3Atrue%2C%22show_x_axis_ticks%22%3Atrue%2C%22x_axis_scale%22%3A%22auto%22%2C%22y_axis_scale_mode%22%3A%22linear%22%2C%22x_axis_reversed%22%3Afalse%2C%22y_axis_reversed%22%3Afalse%2C%22plot_size_by_field%22%3Afalse%2C%22ordering%22%3A%22none%22%2C%22show_null_labels%22%3Afalse%2C%22show_totals_labels%22%3Afalse%2C%22show_silhouette%22%3Afalse%2C%22totals_color%22%3A%22%23808080%22%2C%22type%22%3A%22looker_bar%22%7D&filter_config=%7B%22questions.area%22%3A%5B%7B%22type%22%3A%22%3D%22%2C%22values%22%3A%5B%7B%22constant%22%3A%22Specialty+Room+-+Meat%22%7D%2C%7B%7D%5D%2C%22id%22%3A0%2C%22error%22%3Afalse%7D%5D%2C%22submissions.submission_date%22%3A%5B%7B%22type%22%3A%22on%22%2C%22values%22%3A%5B%7B%22date%22%3A%222018-09-17T00%3A00%3A00.000Z%22%2C%22tz%22%3Atrue%7D%2C%7B%7D%5D%2C%22id%22%3A1%2C%22error%22%3Afalse%7D%5D%2C%22locations.name%22%3A%5B%7B%22type%22%3A%22%3D%22%2C%22values%22%3A%5B%7B%22constant%22%3A%22AMAZON+LAX6%22%7D%2C%7B%7D%5D%2C%22id%22%3A2%2C%22error%22%3Afalse%7D%5D%7D&origin=share-expanded")