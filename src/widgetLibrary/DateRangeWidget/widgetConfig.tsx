import { SearchIcon } from "@illa-design/icon"
import { WidgetConfig } from "@/widgetLibrary/interface"
import i18n from "@/i18n/config"

export const DATE_RANGE_WIDGET_CONFIG: WidgetConfig = {
  type: "DATE_RANGE_WIDGET",
  displayName: "dateRange",
  widgetName: i18n.t("widget.date_range.name"),
  icon: <SearchIcon />,
  sessionType: "CALENDAR",
  w: 20,
  h: 5,
  defaults: {
    dateFormat: "YYYY-MM-DD",
    startPlaceholder: "Start date",
    endPlaceholder: "End date",
    value: ["2022-05-02", "2022-05-03"],
  },
}