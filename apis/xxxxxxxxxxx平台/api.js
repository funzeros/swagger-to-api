import r from "@/xxx/xxx"
// 获取详情
export const postZsgwuiasFlychatFlychatStatisticsGetDetailReq=(body)=>r.request({"url":"/zsgwuias/flychat/flychat-statistics/getDetail","method":"post",body})
// 查询列表
export const postZsgwuiasFlychatFlychatStatisticsGetPageReq=(body)=>r.request({"url":"/zsgwuias/flychat/flychat-statistics/getPage","method":"post",body})
// 获取首页EAM设备运行情况
export const getZsgwuiasRestEAMGetDeviceOperatingConditionVOReq=()=>r.request({"url":"/zsgwuias/rest/EAM/getDeviceOperatingConditionVO","method":"get"})
// 获取首页EAM能耗相关数据
export const getZsgwuiasRestEAMGetEnergyConsumeReq=()=>r.request({"url":"/zsgwuias/rest/EAM/getEnergyConsume","method":"get"})
// 获取首页EAM工程四费数据
export const getZsgwuiasRestEAMGetFourProjectCostsReq=()=>r.request({"url":"/zsgwuias/rest/EAM/getFourProjectCosts","method":"get"})
// 获取首页EAM库存物资
export const getZsgwuiasRestEAMGetStockInfoReq=()=>r.request({"url":"/zsgwuias/rest/EAM/getStockInfo","method":"get"})
// exportExcel
export const getZsgwuiasRestExportExportExcelReq=(query)=>r.request({"url":"/zsgwuias/rest/export/exportExcel","method":"get",query})
// 根据token获取用户信息
export const getZsgwuiasRestGetUserByTokenReq=()=>r.request({"url":"/zsgwuias/rest/getUserByToken","method":"get"})
// 获取本地缓存天气情况
export const postZsgwuiasRestGetWeatherReq=()=>r.request({"url":"/zsgwuias/rest/getWeather","method":"post"})
// 登录
export const postZsgwuiasRestLoginReq=(body)=>r.request({"url":"/zsgwuias/rest/login","method":"post",body})
// 登出
export const postZsgwuiasRestLogoutReq=(query)=>r.request({"url":"/zsgwuias/rest/logout","method":"post",query})
// 获取一次性密码
export const postZsgwuiasRestOutGetOTPReq=()=>r.request({"url":"/zsgwuias/rest/out/getOTP","method":"post"})
// 获取通讯录信息
export const postZsgwuiasRestOutGetTxlReq=()=>r.request({"url":"/zsgwuias/rest/out/getTxl","method":"post"})
// 子模块登录--统计
export const postZsgwuiasRestOutModuleClickReq=(body)=>r.request({"url":"/zsgwuias/rest/out/moduleClick","method":"post",body})
// 子系统登录--统计
export const postZsgwuiasRestOutSubsystemClickReq=(body)=>r.request({"url":"/zsgwuias/rest/out/subsystemClick","method":"post",body})
// 子系统登录--飞鸟--统计
export const postZsgwuiasRestOutSubsystemClickFlyChatReq=(body)=>r.request({"url":"/zsgwuias/rest/out/subsystemClickFlyChat","method":"post",body})
// 账号密码登陆
export const postZsgwuiasRestOutTicketLoginReq=(body)=>r.request({"url":"/zsgwuias/rest/out/ticketLogin","method":"post",body})
// 用户Token验证--OTP
export const postZsgwuiasRestOutUserTokenReq=(body)=>r.request({"url":"/zsgwuias/rest/out/userToken","method":"post",body})
// 获取详情
export const postZsgwuiasRestSyncLogGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/log/getDetail","method":"post",body})
// 查询列表
export const postZsgwuiasRestSyncLogGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/log/getPage","method":"post",body})
// 获取某版本更新数据
export const postZsgwuiasRestSyncOutGetDataReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/out/getData","method":"post",body})
// 获取初始化数据
export const postZsgwuiasRestSyncOutGetInitDataReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/out/getInitData","method":"post",body})
// 获取某条更新数据
export const postZsgwuiasRestSyncOutGetOneDataReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/out/getOneData","method":"post",body})
// 手动推送某版本更新数据
export const postZsgwuiasRestSyncOutPostDataReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/out/postData","method":"post",body})
// 删除
export const postZsgwuiasRestSyncRegeditDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/regedit/delete","method":"post",body})
// 获取详情
export const postZsgwuiasRestSyncRegeditGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/regedit/getDetail","method":"post",body})
// 查询列表
export const postZsgwuiasRestSyncRegeditGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/regedit/getPage","method":"post",body})
// 新增
export const postZsgwuiasRestSyncRegeditInsertReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/regedit/insert","method":"post",body})
// 修改
export const postZsgwuiasRestSyncRegeditUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sync/regedit/update","method":"post",body})
// 获取详情
export const postZsgwuiasRestSysCalendarGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/calendar/getDetail","method":"post",body})
// 查询列表
export const postZsgwuiasRestSysCalendarGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/calendar/getPage","method":"post",body})
// 获取督办发布统计
export const postZsgwuiasRestSysDcdbTjGetDbfbTjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/dcdbTj/getDbfbTj","method":"post",body})
// 获取指派发布统计
export const postZsgwuiasRestSysDcdbTjGetZbfbTjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/dcdbTj/getZbfbTj","method":"post",body})
// 集团网址新增
export const postZsgwuiasRestSysGroupWebsiteAddReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/add","method":"post",body})
// 集团网址删除
export const postZsgwuiasRestSysGroupWebsiteDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/delete","method":"post",body})
// 获取详情
export const postZsgwuiasRestSysGroupWebsiteGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/getDetail","method":"post",body})
// 常用网址列表
export const postZsgwuiasRestSysGroupWebsiteGetListReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/getList","method":"post",body})
// 查询列表
export const postZsgwuiasRestSysGroupWebsiteGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/getPage","method":"post",body})
// 集团网址
export const postZsgwuiasRestSysGroupWebsiteJtwzReq=()=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/jtwz","method":"post"})
// 集团网址修改
export const postZsgwuiasRestSysGroupWebsiteUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/groupWebsite/update","method":"post",body})
// 新增岗位管理
export const postZsgwuiasRestSysGwAddReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/gw/add","method":"post",body})
// 删除岗位管理
export const postZsgwuiasRestSysGwDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/gw/delete","method":"post",body})
// 获取岗位管理详情
export const postZsgwuiasRestSysGwGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/gw/getDetail","method":"post",body})
// 查询列表
export const postZsgwuiasRestSysGwGetListReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/gw/getList","method":"post",body})
// 查询岗位管理列表
export const postZsgwuiasRestSysGwGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/gw/getPage","method":"post",body})
// 修改岗位管理
export const postZsgwuiasRestSysGwUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/gw/update","method":"post",body})
// 获取详情
export const postZsgwuiasRestSysLogloginGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/loglogin/getDetail","method":"post",body})
// 查询列表
export const postZsgwuiasRestSysLogloginGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/loglogin/getPage","method":"post",body})
// 获取登录日志详情
export const postZsgwuiasRestSysLogmoduleGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/logmodule/getDetail","method":"post",body})
// 查询登录日志列表
export const postZsgwuiasRestSysLogmoduleGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/logmodule/getPage","method":"post",body})
// 获取登录日志详情
export const postZsgwuiasRestSysLogsubsystemGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/logsubsystem/getDetail","method":"post",body})
// 查询登录日志列表
export const postZsgwuiasRestSysLogsubsystemGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/logsubsystem/getPage","method":"post",body})
// 新增菜单
export const postZsgwuiasRestSysMenuAddReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/menu/add","method":"post",body})
// 删除菜单
export const postZsgwuiasRestSysMenuDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/menu/delete","method":"post",body})
// 所有子系统及其菜单
export const postZsgwuiasRestSysMenuGetAllMenuReq=()=>r.request({"url":"/zsgwuias/rest/sys/menu/getAllMenu","method":"post"})
// 菜单详情
export const postZsgwuiasRestSysMenuGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/menu/getDetail","method":"post",body})
// 某个子系统下所有菜单
export const postZsgwuiasRestSysMenuSubsystemMenusReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/menu/subsystemMenus","method":"post",body})
// 修改菜单
export const postZsgwuiasRestSysMenuUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/menu/update","method":"post",body})
// 用户菜单
export const postZsgwuiasRestSysMenuUserMenusReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/menu/userMenus","method":"post",body})
// 新增子系统模块
export const postZsgwuiasRestSysModuleAddReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/module/add","method":"post",body})
// 删除子系统模块
export const postZsgwuiasRestSysModuleDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/module/delete","method":"post",body})
// 获取子系统模块详情
export const postZsgwuiasRestSysModuleGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/module/getDetail","method":"post",body})
// 查询子系统模块列表
export const postZsgwuiasRestSysModuleGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/module/getPage","method":"post",body})
// 修改子系统模块
export const postZsgwuiasRestSysModuleUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/module/update","method":"post",body})
// 新增
export const postZsgwuiasRestSysOrgAddReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/org/add","method":"post",body})
// 删除
export const postZsgwuiasRestSysOrgDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/org/delete","method":"post",body})
// 根据单位找部门
export const postZsgwuiasRestSysOrgGetBmTreeReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/org/getBmTree","method":"post",body})
// 获取详情
export const postZsgwuiasRestSysOrgGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/org/getDetail","method":"post",body})
// 单位树-全部
export const postZsgwuiasRestSysOrgGetDwTreeReq=()=>r.request({"url":"/zsgwuias/rest/sys/org/getDwTree","method":"post"})
// 单位树-部分
export const postZsgwuiasRestSysOrgGetDwTreeByIdReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/org/getDwTreeById","method":"post",body})
// 组织架构树-全部
export const postZsgwuiasRestSysOrgGetOrgTreeReq=()=>r.request({"url":"/zsgwuias/rest/sys/org/getOrgTree","method":"post"})
// 组织架构树-部分
export const postZsgwuiasRestSysOrgGetOrgTreeByIdReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/org/getOrgTreeById","method":"post",body})
// 修改
export const postZsgwuiasRestSysOrgUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/org/update","method":"post",body})
// 新增角色
export const postZsgwuiasRestSysRoleAddReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/role/add","method":"post",body})
// 删除角色
export const postZsgwuiasRestSysRoleDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/role/delete","method":"post",body})
// 角色管理
export const postZsgwuiasRestSysRoleGetAllRolesReq=()=>r.request({"url":"/zsgwuias/rest/sys/role/getAllRoles","method":"post"})
// 获取角色详情
export const postZsgwuiasRestSysRoleGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/role/getDetail","method":"post",body})
// 查询角色列表
export const postZsgwuiasRestSysRoleGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/role/getPage","method":"post",body})
// 根据角色获取对应的权限
export const postZsgwuiasRestSysRoleGetRoleAuthsReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/role/getRoleAuths","method":"post",body})
// 角色列表
export const postZsgwuiasRestSysRoleGetRolesbyRoleReq=()=>r.request({"url":"/zsgwuias/rest/sys/role/getRolesbyRole","method":"post"})
// 保存角色和权限对应关系
export const postZsgwuiasRestSysRoleSaveRoleAuthsReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/role/saveRoleAuths","method":"post",body})
// 修改角色
export const postZsgwuiasRestSysRoleUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/role/update","method":"post",body})
// 客户资金到账录入并审核统计
export const postZsgwuiasRestSysScxtTjGetKhdztjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/scxtTj/getKhdztj","method":"post",body})
// 船舶实际作业信息录入统计
export const postZsgwuiasRestSysScxtTjGetSjzytjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/scxtTj/getSjzytj","method":"post",body})
//  停泊费开票时间统计
export const postZsgwuiasRestSysScxtTjGetTbfkptjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/scxtTj/getTbfkptj","method":"post",body})
//  装卸费结算上报时间统计 
export const postZsgwuiasRestSysScxtTjGetZxfjstjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/scxtTj/getZxfjstj","method":"post",body})
// 新增
export const postZsgwuiasRestSysSubsystemAddReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/add","method":"post",body})
// 删除
export const postZsgwuiasRestSysSubsystemDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/delete","method":"post",body})
// 拖拽显示的子系统/常用网址
export const postZsgwuiasRestSysSubsystemDragReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/drag","method":"post",body})
// 获取详情
export const postZsgwuiasRestSysSubsystemGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getDetail","method":"post",body})
// 子系统下拉列表[全部]
export const postZsgwuiasRestSysSubsystemGetDropDownListReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getDropDownList","method":"post"})
// 子系统列表[全部]
export const postZsgwuiasRestSysSubsystemGetListReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getList","method":"post"})
// 子系统列表（按来源获取）
export const postZsgwuiasRestSysSubsystemGetListByLyReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getListByLy","method":"post",body})
// 选择来源
export const postZsgwuiasRestSysSubsystemGetLyListReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getLyList","method":"post"})
// 查询列表[分页]
export const postZsgwuiasRestSysSubsystemGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getPage","method":"post",body})
// 子系统下拉列表[仅统计启用的]
export const postZsgwuiasRestSysSubsystemGetTjDropDownListReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/getTjDropDownList","method":"post"})
// 根据登录人显示子系统/常用网址
export const postZsgwuiasRestSysSubsystemShowByUserReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/showByUser","method":"post",body})
// 子系统/常用网址，设置是否显示
export const postZsgwuiasRestSysSubsystemShowOrHideReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/showOrHide","method":"post",body})
// 修改
export const postZsgwuiasRestSysSubsystemUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/subsystem/update","method":"post",body})
// 用户子系统
export const postZsgwuiasRestSysSubsystemUserSubsystemsReq=()=>r.request({"url":"/zsgwuias/rest/sys/subsystem/userSubsystems","method":"post"})
// 子模块点击情况导出Excel
export const postZsgwuiasRestSysTjmoduleExportZmkReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/tjmodule/exportZmk","method":"post",body})
// 查询下属部门公司子模块点击情况统计列表
export const postZsgwuiasRestSysTjmoduleGetModuleDjTjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/tjmodule/getModuleDjTj","method":"post",body})
// 全港子系统登陆情况导出Excel
export const postZsgwuiasRestSysTjsubsystemExportQgdlqkReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/exportQgdlqk","method":"post",body})
// 下属公司子系统登陆情况导出Excel
export const postZsgwuiasRestSysTjsubsystemExportXszxtqkReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/exportXszxtqk","method":"post",body})
// 舟港公司子系统登陆情况导出Excel
export const postZsgwuiasRestSysTjsubsystemExportZgzxtqkReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/exportZgzxtqk","method":"post",body})
// 首页子系统echarts统计
export const postZsgwuiasRestSysTjsubsystemGetSubHeadReq=()=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubHead","method":"post"})
// 查询全港子系统登陆情况统计列表
export const postZsgwuiasRestSysTjsubsystemGetSubQgHylTjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubQgHylTj","method":"post",body})
// 首页子系统table统计
export const postZsgwuiasRestSysTjsubsystemGetSubTableReq=()=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubTable","method":"post"})
// 查询下属公司子系统登陆情况统计列表
export const postZsgwuiasRestSysTjsubsystemGetSubXsgsHylTjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubXsgsHylTj","method":"post",body})
// 查询舟港公司子系统登陆情况统计列表
export const postZsgwuiasRestSysTjsubsystemGetSubZgHylTjReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/tjsubsystem/getSubZgHylTj","method":"post",body})
// 新增
export const postZsgwuiasRestSysUserAddReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/add","method":"post",body})
// 新增用户预设
export const postZsgwuiasRestSysUserAddChangeDWBMReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/addChangeDWBM","method":"post",body})
// 取消用户预设
export const postZsgwuiasRestSysUserChanelDWBMReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/chanelDWBM","method":"post",body})
// 修改密码
export const postZsgwuiasRestSysUserChangePwdReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/changePwd","method":"post",body})
// 删除
export const postZsgwuiasRestSysUserDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/delete","method":"post",body})
// 获取详情
export const postZsgwuiasRestSysUserGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/getDetail","method":"post",body})
// 查询列表
export const postZsgwuiasRestSysUserGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/getPage","method":"post",body})
// 获取预设详情
export const postZsgwuiasRestSysUserGetYsDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/getYsDetail","method":"post",body})
// 查询预设详细列表
export const postZsgwuiasRestSysUserGetYsXxListReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/getYsXxList","method":"post",body})
// 用户管理
export const postZsgwuiasRestSysUserResetPwdReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/resetPwd","method":"post",body})
// 设置主单位部门
export const postZsgwuiasRestSysUserSetMainDWBMReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/setMainDWBM","method":"post",body})
// 审核单位部门预设
export const postZsgwuiasRestSysUserShenheDWBMReq=()=>r.request({"url":"/zsgwuias/rest/sys/user/shenheDWBM","method":"post"})
// 解除锁定
export const postZsgwuiasRestSysUserUnlockingReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/unlocking","method":"post",body})
// 修改
export const postZsgwuiasRestSysUserUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/user/update","method":"post",body})
// 职位新增
export const postZsgwuiasRestSysZwAddReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zw/add","method":"post",body})
// 职位删除
export const postZsgwuiasRestSysZwDeleteReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zw/delete","method":"post",body})
// 获取详情
export const postZsgwuiasRestSysZwGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zw/getDetail","method":"post",body})
// 查询列表
export const postZsgwuiasRestSysZwGetListReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zw/getList","method":"post",body})
// 查询列表
export const postZsgwuiasRestSysZwGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zw/getPage","method":"post",body})
// 职位修改
export const postZsgwuiasRestSysZwUpdateReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zw/update","method":"post",body})
// 添加单位职位
export const postZsgwuiasRestSysZwzAddDwZwByZwidReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/addDwZwByZwid","method":"post",body})
// 添加用户职位
export const postZsgwuiasRestSysZwzAddUserZwReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/addUserZw","method":"post",body})
// 添加职位层级
export const postZsgwuiasRestSysZwzAddZwRankReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/addZwRank","method":"post",body})
// 删除单位职位
export const postZsgwuiasRestSysZwzDelDwZwByZwidReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/delDwZwByZwid","method":"post",body})
// 删除职位层级
export const postZsgwuiasRestSysZwzDelZwRankReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/delZwRank","method":"post",body})
// 获取全部职位层级
export const postZsgwuiasRestSysZwzGetAllZwRankReq=()=>r.request({"url":"/zsgwuias/rest/sys/zwz/getAllZwRank","method":"post"})
// 获取职位层级详情
export const postZsgwuiasRestSysZwzGetDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getDetail","method":"post",body})
// 获取用户职位列表
export const postZsgwuiasRestSysZwzGetUserZwByidReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getUserZwByid","method":"post",body})
// 根据单位和层级获取职位
export const postZsgwuiasRestSysZwzGetZwByDwAndRKReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getZwByDwAndRK","method":"post",body})
// 获取职位详情
export const postZsgwuiasRestSysZwzGetZwDetailReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getZwDetail","method":"post",body})
// 获取单位职位树结构
export const postZsgwuiasRestSysZwzGetZwTreeByssdwReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/getZwTreeByssdw","method":"post",body})
// 修改单位职位
export const postZsgwuiasRestSysZwzUpdDwZwByZwidReq=(body)=>r.request({"url":"/zsgwuias/rest/sys/zwz/updDwZwByZwid","method":"post",body})
// 日志导出excel
export const postZsgwuiasRestSysLogExportReq=(body)=>r.request({"url":"/zsgwuias/rest/sysLog/export","method":"post",body})
// 日志查询分页
export const postZsgwuiasRestSysLogGetPageReq=(body)=>r.request({"url":"/zsgwuias/rest/sysLog/getPage","method":"post",body})
// 督查督办
export const postZsgwuiasRestThirdDcdbReq=()=>r.request({"url":"/zsgwuias/rest/third/dcdb","method":"post"})
// 生产系统预报确保数据
export const postZsgwuiasRestThirdGetShipOrderListReq=()=>r.request({"url":"/zsgwuias/rest/third/getShipOrderList","method":"post"})
// 用户数据落地
export const postZsgwuiasRestThirdGetSjldByUserReq=()=>r.request({"url":"/zsgwuias/rest/third/getSjldByUser","method":"post"})
// 生产系统3.0港口吞吐量
export const postZsgwuiasRestThirdGetThroughputByBerthReq=()=>r.request({"url":"/zsgwuias/rest/third/getThroughputByBerth","method":"post"})
// 督查督办统计
export const postZsgwuiasRestThirdGetTjDcdbReq=()=>r.request({"url":"/zsgwuias/rest/third/getTjDcdb","method":"post"})
// 隐患管控统计
export const postZsgwuiasRestThirdGetTjYhgkReq=()=>r.request({"url":"/zsgwuias/rest/third/getTjYhgk","method":"post"})
// 港口吞吐量
export const postZsgwuiasRestThirdGkttlReq=()=>r.request({"url":"/zsgwuias/rest/third/gkttl","method":"post"})
// OA登录
export const postZsgwuiasRestThirdNewoaLoginReq=()=>r.request({"url":"/zsgwuias/rest/third/newoaLogin","method":"post"})
// 查询工作待办列表
export const postZsgwuiasRestThirdSjgjGetGzdbPageReq=(body)=>r.request({"url":"/zsgwuias/rest/third/sjgj/getGzdbPage","method":"post",body})
// 查询工作阅办列表
export const postZsgwuiasRestThirdSjgjGetYbxxPageReq=(body)=>r.request({"url":"/zsgwuias/rest/third/sjgj/getYbxxPage","method":"post",body})
// 查询最近已办列表
export const postZsgwuiasRestThirdSjgjGetZjybPageReq=(body)=>r.request({"url":"/zsgwuias/rest/third/sjgj/getZjybPage","method":"post",body})
// 隐患事项
export const postZsgwuiasRestThirdYhsxReq=()=>r.request({"url":"/zsgwuias/rest/third/yhsx","method":"post"})
// 统计树
export const postZsgwuiasRestTjcdTjTreeReq=()=>r.request({"url":"/zsgwuias/rest/tjcd/tjTree","method":"post"})
// 更新天气
export const postZsgwuiasRestUpdateWeatherReq=()=>r.request({"url":"/zsgwuias/rest/updateWeather","method":"post"})
// validateToken
export const postZsgwuiasRestValidateTokenReq=(query)=>r.request({"url":"/zsgwuias/rest/validateToken","method":"post",query})
// 推送所有数据(用户、组织、职位)
export const postZsgwuiasTestSyncAllMesReq=(body)=>r.request({"url":"/zsgwuias/test/SyncAllMes","method":"post",body})
// 角色自动生成（只处理角色为空的用户）
export const postZsgwuiasTestSyncUserRoleReq=()=>r.request({"url":"/zsgwuias/test/SyncUserRole","method":"post"})
// 用户职位初始化的批量处理，全部初始化为职工并生成用户推送数据(不删除原始的职务数据)
export const postZsgwuiasTestSyncZwReq=()=>r.request({"url":"/zsgwuias/test/SyncZw","method":"post"})
// 职位初始化——职位层级的推送数据生成
export const postZsgwuiasTestSyncZwRankReq=()=>r.request({"url":"/zsgwuias/test/SyncZwRank","method":"post"})
// 职位初始化——职位的推送数据生成
export const postZsgwuiasTestSyncZwzReq=()=>r.request({"url":"/zsgwuias/test/SyncZwz","method":"post"})
// 清缓存
export const postZsgwuiasTestCleancacheReq=()=>r.request({"url":"/zsgwuias/test/cleancache","method":"post"})
// 飞鸟账号生成——用户表内igimid为空或0的用户进行生成
export const postZsgwuiasTestInsertigimidReq=()=>r.request({"url":"/zsgwuias/test/insertigimid","method":"post"})
// 同步初始化清理
export const postZsgwuiasTestSyncClearReq=()=>r.request({"url":"/zsgwuias/test/syncClear","method":"post"})
// 同步初始化
export const postZsgwuiasTestSyncInitReq=()=>r.request({"url":"/zsgwuias/test/syncInit","method":"post"})
// 用户导入
export const postZsgwuiasTestUploadReq=(body)=>r.request({"url":"/zsgwuias/test/upload","method":"post",body})
// 飞鸟账号导入用户表
export const postZsgwuiasTestUploadforfnidReq=(body)=>r.request({"url":"/zsgwuias/test/uploadforfnid","method":"post",body})
// 用户分配角色
export const postZsgwuiasTestUsrRoleReq=(query)=>r.request({"url":"/zsgwuias/test/usrRole","method":"post",query})
// 清缓存
export const postZsgwuiasTesttmpCleancacheReq=()=>r.request({"url":"/zsgwuias/testtmp/cleancache","method":"post"})
// initFlychatMid
export const postZsgwuiasTesttmpInitFlychatMidReq=()=>r.request({"url":"/zsgwuias/testtmp/initFlychatMid","method":"post"})
// 用户分配角色
export const postZsgwuiasTesttmpUsrRoleReq=(query)=>r.request({"url":"/zsgwuias/testtmp/usrRole","method":"post",query})