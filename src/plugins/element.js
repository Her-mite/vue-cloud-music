// 按需引入element-plus组件
import { 
  // ElAlert,
  ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  ElButton,
  // ElButtonGroup,
  // ElCalendar,
  // ElCard,
  ElCarousel,
  ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  // ElCheckbox,
  // ElCheckboxButton,
  // ElCheckboxGroup,
  // ElCol,
  // ElCollapse,
  // ElCollapseItem,
  // ElCollapseTransition,
  // ElColorPicker,
  ElContainer,
  // ElDatePicker,
  // ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElFooter,
  // ElForm,
  // ElFormItem,
  ElHeader,
  // ElIcon,
  // ElImage,
  // ElInput,
  // ElInputNumber,
  // ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  // ElOption,
  // ElOptionGroup,
  // ElPageHeader,
  // ElPagination,
  // ElPopconfirm,
  // ElPopover,
  // ElPopper,
  // ElProgress,
  // ElRadio,
  // ElRadioButton,
  // ElRadioGroup,
  // ElRate,
  // ElRow,
  // ElScrollbar,
  // ElSelect,
  // ElStep,
  // ElSteps,
  // ElSubmenu,
  // ElSwitch,
  // ElTabPane,
  // ElTable,
  // ElTableColumn,
  // ElTabs,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  // ElTree,
  // ElUpload,
  // ElInfiniteScroll,
  // ElLoading,
  ElMessage,
  ElSlider,
  // ElMessageBox,
  // ElNotification,

} from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElHeader)
  app.use(ElContainer)
  app.use(ElAside)
  app.use(ElMenu)
  app.use(ElMenuItem)
  app.use(ElMenuItemGroup)
  app.use(ElMain)
  app.use(ElCarousel)
  app.use(ElCarouselItem)
  app.use(ElMessage)
  app.use(ElSlider)
}
