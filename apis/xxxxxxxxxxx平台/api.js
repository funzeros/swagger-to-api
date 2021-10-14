import r from "@/xxx/xxx"
/**
 * @description 获取详情
*/
export const postZsgwuiasFlychatFlychatStatisticsGetDetailReq=(data)=>r.request({"url":"/zsgwuias/flychat/flychat-statistics/getDetail","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasFlychatFlychatStatisticsGetPageReq=(data)=>r.request({"url":"/zsgwuias/flychat/flychat-statistics/getPage","method":"post",data})
/**
 * @description 获取首页EAM设备运行情况
*/
export const getZsgwuiasRestEAMGetDeviceOperatingConditionVOReq=()=>r.request({"url":"/zsgwuias/rest/EAM/getDeviceOperatingConditionVO","method":"get"})
/**
 * @description 获取首页EAM能耗相关数据
*/
export const getZsgwuiasRestEAMGetEnergyConsumeReq=()=>r.request({"url":"/zsgwuias/rest/EAM/getEnergyConsume","method":"get"})
/**
 * @description 获取首页EAM工程四费数据
*/
export const getZsgwuiasRestEAMGetFourProjectCostsReq=()=>r.request({"url":"/zsgwuias/rest/EAM/getFourProjectCosts","method":"get"})
/**
 * @description 获取首页EAM库存物资
*/
export const getZsgwuiasRestEAMGetStockInfoReq=()=>r.request({"url":"/zsgwuias/rest/EAM/getStockInfo","method":"get"})
/**
 * @description exportExcel
*/
export const getZsgwuiasRestExportExportExcelReq=(params)=>r.request({"url":"/zsgwuias/rest/export/exportExcel","method":"get",params})
/**
 * @description 根据token获取用户信息
*/
export const getZsgwuiasRestGetUserByTokenReq=()=>r.request({"url":"/zsgwuias/rest/getUserByToken","method":"get"})
/**
 * @description 获取本地缓存天气情况
*/
export const postZsgwuiasRestGetWeatherReq=()=>r.request({"url":"/zsgwuias/rest/getWeather","method":"post"})
/**
 * @description 登录
*/
export const postZsgwuiasRestLoginReq=(data)=>r.request({"url":"/zsgwuias/rest/login","method":"post",data})
/**
 * @description 登出
*/
export const postZsgwuiasRestLogoutReq=(params)=>r.request({"url":"/zsgwuias/rest/logout","method":"post",params})
/**
 * @description 获取一次性密码
*/
export const postZsgwuiasRestOutGetOTPReq=()=>r.request({"url":"/zsgwuias/rest/out/getOTP","method":"post"})
/**
 * @description 获取通讯录信息
*/
export const postZsgwuiasRestOutGetTxlReq=()=>r.request({"url":"/zsgwuias/rest/out/getTxl","method":"post"})
/**
 * @description 子模块登录--统计
*/
export const postZsgwuiasRestOutModuleClickReq=(data)=>r.request({"url":"/zsgwuias/rest/out/moduleClick","method":"post",data})
/**
 * @description 子系统登录--统计
*/
export const postZsgwuiasRestOutSubsystemClickReq=(data)=>r.request({"url":"/zsgwuias/rest/out/subsystemClick","method":"post",data})
/**
 * @description 子系统登录--飞鸟--统计
*/
export const postZsgwuiasRestOutSubsystemClickFlyChatReq=(data)=>r.request({"url":"/zsgwuias/rest/out/subsystemClickFlyChat","method":"post",data})
/**
 * @description 账号密码登陆
*/
export const postZsgwuiasRestOutTicketLoginReq=(data)=>r.request({"url":"/zsgwuias/rest/out/ticketLogin","method":"post",data})
/**
 * @description 用户Token验证--OTP
*/
export const postZsgwuiasRestOutUserTokenReq=(data)=>r.request({"url":"/zsgwuias/rest/out/userToken","method":"post",data})
/**
 * @description 获取详情
*/
export const postZsgwuiasRestSyncLogGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/log/getDetail","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasRestSyncLogGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/log/getPage","method":"post",data})
/**
 * @description 获取某版本更新数据
*/
export const postZsgwuiasRestSyncOutGetDataReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/out/getData","method":"post",data})
/**
 * @description 获取初始化数据
*/
export const postZsgwuiasRestSyncOutGetInitDataReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/out/getInitData","method":"post",data})
/**
 * @description 获取某条更新数据
*/
export const postZsgwuiasRestSyncOutGetOneDataReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/out/getOneData","method":"post",data})
/**
 * @description 手动推送某版本更新数据
*/
export const postZsgwuiasRestSyncOutPostDataReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/out/postData","method":"post",data})
/**
 * @description 删除
*/
export const postZsgwuiasRestSyncRegeditDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/regedit/delete","method":"post",data})
/**
 * @description 获取详情
*/
export const postZsgwuiasRestSyncRegeditGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/regedit/getDetail","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasRestSyncRegeditGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/regedit/getPage","method":"post",data})
/**
 * @description 新增
*/
export const postZsgwuiasRestSyncRegeditInsertReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/regedit/insert","method":"post",data})
/**
 * @description 修改
*/
export const postZsgwuiasRestSyncRegeditUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sync/regedit/update","method":"post",data})
/**
 * @description 获取详情
*/
export const postZsgwuiasRestSysCalendarGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/calendar/getDetail","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasRestSysCalendarGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/calendar/getPage","method":"post",data})
/**
 * @description 获取督办发布统计
*/
export const postZsgwuiasRestSysDcdbTjGetDbfbTjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/dcdbTj/getDbfbTj","method":"post",data})
/**
 * @description 获取指派发布统计
*/
export const postZsgwuiasRestSysDcdbTjGetZbfbTjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/dcdbTj/getZbfbTj","method":"post",data})
/**
 * @description 集团网址新增
*/
export const postZsgwuiasRestSysGroupWebsiteAddReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/add","method":"post",data})
/**
 * @description 集团网址删除
*/
export const postZsgwuiasRestSysGroupWebsiteDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/delete","method":"post",data})
/**
 * @description 获取详情
*/
export const postZsgwuiasRestSysGroupWebsiteGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/getDetail","method":"post",data})
/**
 * @description 常用网址列表
*/
export const postZsgwuiasRestSysGroupWebsiteGetListReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/getList","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasRestSysGroupWebsiteGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/getPage","method":"post",data})
/**
 * @description 集团网址
*/
export const postZsgwuiasRestSysGroupWebsiteJtwzReq=()=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/jtwz","method":"post"})
/**
 * @description 集团网址修改
*/
export const postZsgwuiasRestSysGroupWebsiteUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/update","method":"post",data})
/**
 * @description 新增岗位管理
*/
export const postZsgwuiasRestSysGwAddReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/gw/add","method":"post",data})
/**
 * @description 删除岗位管理
*/
export const postZsgwuiasRestSysGwDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/gw/delete","method":"post",data})
/**
 * @description 获取岗位管理详情
*/
export const postZsgwuiasRestSysGwGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/gw/getDetail","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasRestSysGwGetListReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/gw/getList","method":"post",data})
/**
 * @description 查询岗位管理列表
*/
export const postZsgwuiasRestSysGwGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/gw/getPage","method":"post",data})
/**
 * @description 修改岗位管理
*/
export const postZsgwuiasRestSysGwUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/gw/update","method":"post",data})
/**
 * @description 获取详情
*/
export const postZsgwuiasRestSysLogloginGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/loglogin/getDetail","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasRestSysLogloginGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/loglogin/getPage","method":"post",data})
/**
 * @description 获取登录日志详情
*/
export const postZsgwuiasRestSysLogmoduleGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/logmodule/getDetail","method":"post",data})
/**
 * @description 查询登录日志列表
*/
export const postZsgwuiasRestSysLogmoduleGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/logmodule/getPage","method":"post",data})
/**
 * @description 获取登录日志详情
*/
export const postZsgwuiasRestSysLogsubsystemGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/logsubsystem/getDetail","method":"post",data})
/**
 * @description 查询登录日志列表
*/
export const postZsgwuiasRestSysLogsubsystemGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/logsubsystem/getPage","method":"post",data})
/**
 * @description 新增菜单
*/
export const postZsgwuiasRestSysMenuAddReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/menu/add","method":"post",data})
/**
 * @description 删除菜单
*/
export const postZsgwuiasRestSysMenuDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/menu/delete","method":"post",data})
/**
 * @description 所有子系统及其菜单
*/
export const postZsgwuiasRestSysMenuGetAllMenuReq=()=>r.request({"url":"/zsgwuias/rest/sys/menu/getAllMenu","method":"post"})
/**
 * @description 菜单详情
*/
export const postZsgwuiasRestSysMenuGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/menu/getDetail","method":"post",data})
/**
 * @description 某个子系统下所有菜单
*/
export const postZsgwuiasRestSysMenuSubsystemMenusReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/menu/subsystemMenus","method":"post",data})
/**
 * @description 修改菜单
*/
export const postZsgwuiasRestSysMenuUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/menu/update","method":"post",data})
/**
 * @description 用户菜单
*/
export const postZsgwuiasRestSysMenuUserMenusReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/menu/userMenus","method":"post",data})
/**
 * @description 新增子系统模块
*/
export const postZsgwuiasRestSysModuleAddReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/module/add","method":"post",data})
/**
 * @description 删除子系统模块
*/
export const postZsgwuiasRestSysModuleDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/module/delete","method":"post",data})
/**
 * @description 获取子系统模块详情
*/
export const postZsgwuiasRestSysModuleGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/module/getDetail","method":"post",data})
/**
 * @description 查询子系统模块列表
*/
export const postZsgwuiasRestSysModuleGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/module/getPage","method":"post",data})
/**
 * @description 修改子系统模块
*/
export const postZsgwuiasRestSysModuleUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/module/update","method":"post",data})
/**
 * @description 新增
*/
export const postZsgwuiasRestSysOrgAddReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/org/add","method":"post",data})
/**
 * @description 删除
*/
export const postZsgwuiasRestSysOrgDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/org/delete","method":"post",data})
/**
 * @description 根据单位找部门
*/
export const postZsgwuiasRestSysOrgGetBmTreeReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/org/getBmTree","method":"post",data})
/**
 * @description 获取详情
*/
export const postZsgwuiasRestSysOrgGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/org/getDetail","method":"post",data})
/**
 * @description 单位树-全部
*/
export const postZsgwuiasRestSysOrgGetDwTreeReq=()=>r.request({"url":"/zsgwuias/rest/sys/org/getDwTree","method":"post"})
/**
 * @description 单位树-部分
*/
export const postZsgwuiasRestSysOrgGetDwTreeByIdReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/org/getDwTreeById","method":"post",data})
/**
 * @description 组织架构树-全部
*/
export const postZsgwuiasRestSysOrgGetOrgTreeReq=()=>r.request({"url":"/zsgwuias/rest/sys/org/getOrgTree","method":"post"})
/**
 * @description 组织架构树-部分
*/
export const postZsgwuiasRestSysOrgGetOrgTreeByIdReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/org/getOrgTreeById","method":"post",data})
/**
 * @description 修改
*/
export const postZsgwuiasRestSysOrgUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/org/update","method":"post",data})
/**
 * @description 新增角色
*/
export const postZsgwuiasRestSysRoleAddReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/role/add","method":"post",data})
/**
 * @description 删除角色
*/
export const postZsgwuiasRestSysRoleDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/role/delete","method":"post",data})
/**
 * @description 角色管理
*/
export const postZsgwuiasRestSysRoleGetAllRolesReq=()=>r.request({"url":"/zsgwuias/rest/sys/role/getAllRoles","method":"post"})
/**
 * @description 获取角色详情
*/
export const postZsgwuiasRestSysRoleGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/role/getDetail","method":"post",data})
/**
 * @description 查询角色列表
*/
export const postZsgwuiasRestSysRoleGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/role/getPage","method":"post",data})
/**
 * @description 根据角色获取对应的权限
*/
export const postZsgwuiasRestSysRoleGetRoleAuthsReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/role/getRoleAuths","method":"post",data})
/**
 * @description 角色列表
*/
export const postZsgwuiasRestSysRoleGetRolesbyRoleReq=()=>r.request({"url":"/zsgwuias/rest/sys/role/getRolesbyRole","method":"post"})
/**
 * @description 保存角色和权限对应关系
*/
export const postZsgwuiasRestSysRoleSaveRoleAuthsReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/role/saveRoleAuths","method":"post",data})
/**
 * @description 修改角色
*/
export const postZsgwuiasRestSysRoleUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/role/update","method":"post",data})
/**
 * @description 客户资金到账录入并审核统计
*/
export const postZsgwuiasRestSysScxtTjGetKhdztjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/scxtTj/getKhdztj","method":"post",data})
/**
 * @description 船舶实际作业信息录入统计
*/
export const postZsgwuiasRestSysScxtTjGetSjzytjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/scxtTj/getSjzytj","method":"post",data})
/**
 * @description  停泊费开票时间统计
*/
export const postZsgwuiasRestSysScxtTjGetTbfkptjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/scxtTj/getTbfkptj","method":"post",data})
/**
 * @description  装卸费结算上报时间统计 
*/
export const postZsgwuiasRestSysScxtTjGetZxfjstjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/scxtTj/getZxfjstj","method":"post",data})
/**
 * @description 新增
*/
export const postZsgwuiasRestSysSubsystemAddReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/add","method":"post",data})
/**
 * @description 删除
*/
export const postZsgwuiasRestSysSubsystemDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/delete","method":"post",data})
/**
 * @description 拖拽显示的子系统/常用网址
*/
export const postZsgwuiasRestSysSubsystemDragReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/drag","method":"post",data})
/**
 * @description 获取详情
*/
export const postZsgwuiasRestSysSubsystemGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getDetail","method":"post",data})
/**
 * @description 子系统下拉列表[全部]
*/
export const postZsgwuiasRestSysSubsystemGetDropDownListReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getDropDownList","method":"post"})
/**
 * @description 子系统列表[全部]
*/
export const postZsgwuiasRestSysSubsystemGetListReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getList","method":"post"})
/**
 * @description 子系统列表（按来源获取）
*/
export const postZsgwuiasRestSysSubsystemGetListByLyReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getListByLy","method":"post",data})
/**
 * @description 选择来源
*/
export const postZsgwuiasRestSysSubsystemGetLyListReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getLyList","method":"post"})
/**
 * @description 查询列表[分页]
*/
export const postZsgwuiasRestSysSubsystemGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getPage","method":"post",data})
/**
 * @description 子系统下拉列表[仅统计启用的]
*/
export const postZsgwuiasRestSysSubsystemGetTjDropDownListReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getTjDropDownList","method":"post"})
/**
 * @description 根据登录人显示子系统/常用网址
*/
export const postZsgwuiasRestSysSubsystemShowByUserReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/showByUser","method":"post",data})
/**
 * @description 子系统/常用网址，设置是否显示
*/
export const postZsgwuiasRestSysSubsystemShowOrHideReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/showOrHide","method":"post",data})
/**
 * @description 修改
*/
export const postZsgwuiasRestSysSubsystemUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/update","method":"post",data})
/**
 * @description 用户子系统
*/
export const postZsgwuiasRestSysSubsystemUserSubsystemsReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/userSubsystems","method":"post"})
/**
 * @description 子模块点击情况导出Excel
*/
export const postZsgwuiasRestSysTjmoduleExportZmkReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/tjmodule/exportZmk","method":"post",data})
/**
 * @description 查询下属部门公司子模块点击情况统计列表
*/
export const postZsgwuiasRestSysTjmoduleGetModuleDjTjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/tjmodule/getModuleDjTj","method":"post",data})
/**
 * @description 全港子系统登陆情况导出Excel
*/
export const postZsgwuiasRestSysTjsubsystemExportQgdlqkReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/exportQgdlqk","method":"post",data})
/**
 * @description 下属公司子系统登陆情况导出Excel
*/
export const postZsgwuiasRestSysTjsubsystemExportXszxtqkReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/exportXszxtqk","method":"post",data})
/**
 * @description 舟港公司子系统登陆情况导出Excel
*/
export const postZsgwuiasRestSysTjsubsystemExportZgzxtqkReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/exportZgzxtqk","method":"post",data})
/**
 * @description 首页子系统echarts统计
*/
export const postZsgwuiasRestSysTjsubsystemGetSubHeadReq=()=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubHead","method":"post"})
/**
 * @description 查询全港子系统登陆情况统计列表
*/
export const postZsgwuiasRestSysTjsubsystemGetSubQgHylTjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubQgHylTj","method":"post",data})
/**
 * @description 首页子系统table统计
*/
export const postZsgwuiasRestSysTjsubsystemGetSubTableReq=()=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubTable","method":"post"})
/**
 * @description 查询下属公司子系统登陆情况统计列表
*/
export const postZsgwuiasRestSysTjsubsystemGetSubXsgsHylTjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubXsgsHylTj","method":"post",data})
/**
 * @description 查询舟港公司子系统登陆情况统计列表
*/
export const postZsgwuiasRestSysTjsubsystemGetSubZgHylTjReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubZgHylTj","method":"post",data})
/**
 * @description 新增
*/
export const postZsgwuiasRestSysUserAddReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/add","method":"post",data})
/**
 * @description 新增用户预设
*/
export const postZsgwuiasRestSysUserAddChangeDWBMReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/addChangeDWBM","method":"post",data})
/**
 * @description 取消用户预设
*/
export const postZsgwuiasRestSysUserChanelDWBMReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/chanelDWBM","method":"post",data})
/**
 * @description 修改密码
*/
export const postZsgwuiasRestSysUserChangePwdReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/changePwd","method":"post",data})
/**
 * @description 删除
*/
export const postZsgwuiasRestSysUserDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/delete","method":"post",data})
/**
 * @description 获取详情
*/
export const postZsgwuiasRestSysUserGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/getDetail","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasRestSysUserGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/getPage","method":"post",data})
/**
 * @description 获取预设详情
*/
export const postZsgwuiasRestSysUserGetYsDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/getYsDetail","method":"post",data})
/**
 * @description 查询预设详细列表
*/
export const postZsgwuiasRestSysUserGetYsXxListReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/getYsXxList","method":"post",data})
/**
 * @description 用户管理
*/
export const postZsgwuiasRestSysUserResetPwdReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/resetPwd","method":"post",data})
/**
 * @description 设置主单位部门
*/
export const postZsgwuiasRestSysUserSetMainDWBMReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/setMainDWBM","method":"post",data})
/**
 * @description 审核单位部门预设
*/
export const postZsgwuiasRestSysUserShenheDWBMReq=()=>r.request({"url":"/zsgwuias/rest/sys/user/shenheDWBM","method":"post"})
/**
 * @description 解除锁定
*/
export const postZsgwuiasRestSysUserUnlockingReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/unlocking","method":"post",data})
/**
 * @description 修改
*/
export const postZsgwuiasRestSysUserUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/user/update","method":"post",data})
/**
 * @description 职位新增
*/
export const postZsgwuiasRestSysZwAddReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zw/add","method":"post",data})
/**
 * @description 职位删除
*/
export const postZsgwuiasRestSysZwDeleteReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zw/delete","method":"post",data})
/**
 * @description 获取详情
*/
export const postZsgwuiasRestSysZwGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zw/getDetail","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasRestSysZwGetListReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zw/getList","method":"post",data})
/**
 * @description 查询列表
*/
export const postZsgwuiasRestSysZwGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zw/getPage","method":"post",data})
/**
 * @description 职位修改
*/
export const postZsgwuiasRestSysZwUpdateReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zw/update","method":"post",data})
/**
 * @description 添加单位职位
*/
export const postZsgwuiasRestSysZwzAddDwZwByZwidReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/addDwZwByZwid","method":"post",data})
/**
 * @description 添加用户职位
*/
export const postZsgwuiasRestSysZwzAddUserZwReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/addUserZw","method":"post",data})
/**
 * @description 添加职位层级
*/
export const postZsgwuiasRestSysZwzAddZwRankReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/addZwRank","method":"post",data})
/**
 * @description 删除单位职位
*/
export const postZsgwuiasRestSysZwzDelDwZwByZwidReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/delDwZwByZwid","method":"post",data})
/**
 * @description 删除职位层级
*/
export const postZsgwuiasRestSysZwzDelZwRankReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/delZwRank","method":"post",data})
/**
 * @description 获取全部职位层级
*/
export const postZsgwuiasRestSysZwzGetAllZwRankReq=()=>r.request({"url":"/zsgwuias/rest/sys/zwz/getAllZwRank","method":"post"})
/**
 * @description 获取职位层级详情
*/
export const postZsgwuiasRestSysZwzGetDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getDetail","method":"post",data})
/**
 * @description 获取用户职位列表
*/
export const postZsgwuiasRestSysZwzGetUserZwByidReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getUserZwByid","method":"post",data})
/**
 * @description 根据单位和层级获取职位
*/
export const postZsgwuiasRestSysZwzGetZwByDwAndRKReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getZwByDwAndRK","method":"post",data})
/**
 * @description 获取职位详情
*/
export const postZsgwuiasRestSysZwzGetZwDetailReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getZwDetail","method":"post",data})
/**
 * @description 获取单位职位树结构
*/
export const postZsgwuiasRestSysZwzGetZwTreeByssdwReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getZwTreeByssdw","method":"post",data})
/**
 * @description 修改单位职位
*/
export const postZsgwuiasRestSysZwzUpdDwZwByZwidReq=(data)=>r.request({"url":"/zsgwuias/rest/sys/zwz/updDwZwByZwid","method":"post",data})
/**
 * @description 日志导出excel
*/
export const postZsgwuiasRestSysLogExportReq=(data)=>r.request({"url":"/zsgwuias/rest/sysLog/export","method":"post",data})
/**
 * @description 日志查询分页
*/
export const postZsgwuiasRestSysLogGetPageReq=(data)=>r.request({"url":"/zsgwuias/rest/sysLog/getPage","method":"post",data})
/**
 * @description 督查督办
*/
export const postZsgwuiasRestThirdDcdbReq=()=>r.request({"url":"/zsgwuias/rest/third/dcdb","method":"post"})
/**
 * @description 生产系统预报确保数据
*/
export const postZsgwuiasRestThirdGetShipOrderListReq=()=>r.request({"url":"/zsgwuias/rest/third/getShipOrderList","method":"post"})
/**
 * @description 用户数据落地
*/
export const postZsgwuiasRestThirdGetSjldByUserReq=()=>r.request({"url":"/zsgwuias/rest/third/getSjldByUser","method":"post"})
/**
 * @description 生产系统3.0港口吞吐量
*/
export const postZsgwuiasRestThirdGetThroughputByBerthReq=()=>r.request({"url":"/zsgwuias/rest/third/getThroughputByBerth","method":"post"})
/**
 * @description 督查督办统计
*/
export const postZsgwuiasRestThirdGetTjDcdbReq=()=>r.request({"url":"/zsgwuias/rest/third/getTjDcdb","method":"post"})
/**
 * @description 隐患管控统计
*/
export const postZsgwuiasRestThirdGetTjYhgkReq=()=>r.request({"url":"/zsgwuias/rest/third/getTjYhgk","method":"post"})
/**
 * @description 港口吞吐量
*/
export const postZsgwuiasRestThirdGkttlReq=()=>r.request({"url":"/zsgwuias/rest/third/gkttl","method":"post"})
/**
 * @description OA登录
*/
export const postZsgwuiasRestThirdNewoaLoginReq=()=>r.request({"url":"/zsgwuias/rest/third/newoaLogin","method":"post"})
/**
 * @description 查询工作待办列表
*/
export const postZsgwuiasRestThirdSjgjGetGzdbPageReq=(data)=>r.request({"url":"/zsgwuias/rest/third/sjgj/getGzdbPage","method":"post",data})
/**
 * @description 查询工作阅办列表
*/
export const postZsgwuiasRestThirdSjgjGetYbxxPageReq=(data)=>r.request({"url":"/zsgwuias/rest/third/sjgj/getYbxxPage","method":"post",data})
/**
 * @description 查询最近已办列表
*/
export const postZsgwuiasRestThirdSjgjGetZjybPageReq=(data)=>r.request({"url":"/zsgwuias/rest/third/sjgj/getZjybPage","method":"post",data})
/**
 * @description 隐患事项
*/
export const postZsgwuiasRestThirdYhsxReq=()=>r.request({"url":"/zsgwuias/rest/third/yhsx","method":"post"})
/**
 * @description 统计树
*/
export const postZsgwuiasRestTjcdTjTreeReq=()=>r.request({"url":"/zsgwuias/rest/tjcd/tjTree","method":"post"})
/**
 * @description 更新天气
*/
export const postZsgwuiasRestUpdateWeatherReq=()=>r.request({"url":"/zsgwuias/rest/updateWeather","method":"post"})
/**
 * @description validateToken
*/
export const postZsgwuiasRestValidateTokenReq=(params)=>r.request({"url":"/zsgwuias/rest/validateToken","method":"post",params})
/**
 * @description 推送所有数据(用户、组织、职位)
*/
export const postZsgwuiasTestSyncAllMesReq=(data)=>r.request({"url":"/zsgwuias/test/SyncAllMes","method":"post",data})
/**
 * @description 角色自动生成（只处理角色为空的用户）
*/
export const postZsgwuiasTestSyncUserRoleReq=()=>r.request({"url":"/zsgwuias/test/SyncUserRole","method":"post"})
/**
 * @description 用户职位初始化的批量处理，全部初始化为职工并生成用户推送数据(不删除原始的职务数据)
*/
export const postZsgwuiasTestSyncZwReq=()=>r.request({"url":"/zsgwuias/test/SyncZw","method":"post"})
/**
 * @description 职位初始化——职位层级的推送数据生成
*/
export const postZsgwuiasTestSyncZwRankReq=()=>r.request({"url":"/zsgwuias/test/SyncZwRank","method":"post"})
/**
 * @description 职位初始化——职位的推送数据生成
*/
export const postZsgwuiasTestSyncZwzReq=()=>r.request({"url":"/zsgwuias/test/SyncZwz","method":"post"})
/**
 * @description 清缓存
*/
export const postZsgwuiasTestCleancacheReq=()=>r.request({"url":"/zsgwuias/test/cleancache","method":"post"})
/**
 * @description 飞鸟账号生成——用户表内igimid为空或0的用户进行生成
*/
export const postZsgwuiasTestInsertigimidReq=()=>r.request({"url":"/zsgwuias/test/insertigimid","method":"post"})
/**
 * @description 同步初始化清理
*/
export const postZsgwuiasTestSyncClearReq=()=>r.request({"url":"/zsgwuias/test/syncClear","method":"post"})
/**
 * @description 同步初始化
*/
export const postZsgwuiasTestSyncInitReq=()=>r.request({"url":"/zsgwuias/test/syncInit","method":"post"})
/**
 * @description 用户导入
*/
export const postZsgwuiasTestUploadReq=(data)=>r.request({"url":"/zsgwuias/test/upload","method":"post",data})
/**
 * @description 飞鸟账号导入用户表
*/
export const postZsgwuiasTestUploadforfnidReq=(data)=>r.request({"url":"/zsgwuias/test/uploadforfnid","method":"post",data})
/**
 * @description 用户分配角色
*/
export const postZsgwuiasTestUsrRoleReq=(params)=>r.request({"url":"/zsgwuias/test/usrRole","method":"post",params})
/**
 * @description 清缓存
*/
export const postZsgwuiasTesttmpCleancacheReq=()=>r.request({"url":"/zsgwuias/testtmp/cleancache","method":"post"})
/**
 * @description initFlychatMid
*/
export const postZsgwuiasTesttmpInitFlychatMidReq=()=>r.request({"url":"/zsgwuias/testtmp/initFlychatMid","method":"post"})
/**
 * @description 用户分配角色
*/
export const postZsgwuiasTesttmpUsrRoleReq=(params)=>r.request({"url":"/zsgwuias/testtmp/usrRole","method":"post",params})