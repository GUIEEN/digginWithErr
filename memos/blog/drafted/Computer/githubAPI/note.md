＜あるUserのRepositoryを取得するには＞
1。`https://api.github.com/user/repos?access_token=${accessToken}&type=${type}`
2。`https://api.github.com/orgs/${orgName}/repos?access_token=${accessToken}&type=${type}`

* 他のAPIを通じて検索することもできるが、上の方法でメンバーシップによらず全て呼び出して処理した方がコスト面で低い、加工性も良い。
* Typeで役割（Admin,member,all,..）ごとの検索が可能となる。

Organization基準でRepositoryを呼ぶかは場合による

「ユーザが属しているOrganizationのRepositoryを習得する」についての考察

1. UserのOrganization登録
    1. Adminだけが可能
2. その後からMemberの`/owner`ページでそのOrganizationが見える
3. その後からOrganizationページではRepository登録ができる
    1. Organizationに属しているUserのRepositoryを取得して登録を行うのがシンプル
        1. ない場合にはRedirectするかメッセージで表示するか
    2. 登録のボタンはどのURLで配置すべきか
        1. http://localhost:4000/orgs/OrgName
        2. それとも`/owner/repos`でまとめるか
    3. ボタンクリック時、
        1. 上記の2番目の方法でOrganizationの中のRepositoryを得る
        2. まとめる場合には1番目の方法を使うのが効率的
    4. Create時にはDBに登録されたとしてもActivateなのか考えるべき
        1. soft deletionは必要なのか？無かった方がよりシンプルになる
    5. その他考えたことは
        1. Public Repositoryだけ登録できるようにした方が良いか
4. 今後、考えないと行けないこと
    1. OrganizationからのRepositoryのAdminが変わった場合は？
    2. Organizationから脱退した場合は？
    3. こう言う場合起こりうる金の分担は？

