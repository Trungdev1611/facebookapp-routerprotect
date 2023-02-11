FB_APP (SCSS, styled-components, MaterialUI JWT, react-router, nodejs, mysql, )
|--Chức năng: Login, chat(danh sách bạn bè), tin tức, like, comment, uploadImagePost, trang cá nhân, UploadImageProfile
|--Route: Vào RouteLogin khi vừa truy cập ("/login")
|----|: "/login" (bao gồm login và register)
|----|: "/profile" (trang cá nhân)
|----|: "/messager" (chat)
|----|: "/groups" (nhóm - list danh sách nhóm tham gia)
|----|: "/group/namegroup" (nhóm - chi tiết nhóm)
|--a/ Authen (signUp, login, forgot password)
| |--JWT
|--Router
| |--React-routerV6
| |-ProtectedRoute
| |-Not Protected Route
|
|--components
|-----|: Login
|-----|: Header+Logout
|-----|: Sidebar
|-----|: RightBar
|-----|: Main (nultipost)
|-----|: Post
|-----|: Post-footer (like, comment, share)
|
|--Layout
|-----|: Login (chỉ có khung login form)
|-----|: Home (Header + sidebar + rightbar +children)
|-----|: Profile (Header + sidebar +children)
|-----|: Chat (Header +children + rightbar)
|-----|: Group (Header + sidebar +children)

\*\* lưu ý: dự án này đã áp dụng nghiêm ngặt type vs redux reactjs (không bỏ qua any)
