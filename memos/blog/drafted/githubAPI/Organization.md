2. Organization
    1. GET
        1. User
            1. All
                1. `/user/orgs`
                    1. public && private
                        ```
                        Status: 200 OK
                        Link: <https://api.github.com/resource?page=2>; rel="next",
                            <https://api.github.com/resource?page=5>; rel="last"
                        [
                            {
                                "login": "github",
                                "id": 1,
                                "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
                                "url": "https://api.github.com/orgs/github",
                                "repos_url": "https://api.github.com/orgs/github/repos",
                                "events_url": "https://api.github.com/orgs/github/events",
                                "hooks_url": "https://api.github.com/orgs/github/hooks",
                                "issues_url": "https://api.github.com/orgs/github/issues",
                                "members_url": "https://api.github.com/orgs/github/members{/member}",
                                "public_members_url": "https://api.github.com/orgs/github/public_members{/member}",
                                "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                "description": "A great organization"
                            }
                        ]
                        ```
                2. `/users/:username/orgs`
                    1. This method only lists **public memberships**, regardless of authentication.
                        ```
                        Status: 200 OK
                        Link: <https://api.github.com/resource?page=2>; rel="next",
                            <https://api.github.com/resource?page=5>; rel="last"
                        [
                            {
                                "login": "github",
                                "id": 1,
                                "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
                                "url": "https://api.github.com/orgs/github",
                                "repos_url": "https://api.github.com/orgs/github/repos",
                                "events_url": "https://api.github.com/orgs/github/events",
                                "hooks_url": "https://api.github.com/orgs/github/hooks",
                                "issues_url": "https://api.github.com/orgs/github/issues",
                                "members_url": "https://api.github.com/orgs/github/members{/member}",
                                "public_members_url": "https://api.github.com/orgs/github/public_members{/member}",
                                "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                "description": "A great organization"
                            }
                        ]
                        ```
        2. Organization 
            1. One
                1. `/orgs/:org`
                    ```
                    Status: 200 OK
                    {
                        "login": "github",
                        "id": 1,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
                        "url": "https://api.github.com/orgs/github",
                        "repos_url": "https://api.github.com/orgs/github/repos",
                        "events_url": "https://api.github.com/orgs/github/events",
                        "hooks_url": "https://api.github.com/orgs/github/hooks",
                        "issues_url": "https://api.github.com/orgs/github/issues",
                        "members_url": "https://api.github.com/orgs/github/members{/member}",
                        "public_members_url": "https://api.github.com/orgs/github/public_members{/member}",
                        "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                        "description": "A great organization",
                        "name": "github",
                        "company": "GitHub",
                        "blog": "https://github.com/blog",
                        "location": "San Francisco",
                        "email": "octocat@github.com",
                        "has_organization_projects": true,
                        "has_repository_projects": true,
                        "public_repos": 2,
                        "public_gists": 1,
                        "followers": 20,
                        "following": 0,
                        "html_url": "https://github.com/octocat",
                        "created_at": "2008-01-14T04:33:35Z",
                        "type": "Organization",
                        "total_private_repos": 100,
                        "owned_private_repos": 100,
                        "private_gists": 81,
                        "disk_usage": 10000,
                        "collaborators": 8,
                        "billing_email": "support@github.com",
                        "plan": {
                            "name": "Medium",
                            "space": 400,
                            "private_repos": 20
                        },
                        "default_repository_settings": "read",
                        "members_can_create_repositories": true,
                        "two_factor_requirement_enabled": true
                    }
                    ```
            2. Member
                1. All
                    1. `/orgs/:org/members`
                        1. role= all, admin, member
                            ```
                            Response if requester is not an organization member
                            Status: 302 Found
                            Location: https://api.github.com/orgs/github/public_members
                            ```
                            ```
                            Status: 200 OK
                            Link: <https://api.github.com/resource?page=2>; rel="next",
                                <https://api.github.com/resource?page=5>; rel="last"
                            [
                                {
                                    "login": "octocat",
                                    "id": 1,
                                    "node_id": "MDQ6VXNlcjE=",
                                    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                    "gravatar_id": "",
                                    "url": "https://api.github.com/users/octocat",
                                    "html_url": "https://github.com/octocat",
                                    "followers_url": "https://api.github.com/users/octocat/followers",
                                    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                                    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                                    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                                    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                                    "organizations_url": "https://api.github.com/users/octocat/orgs",
                                    "repos_url": "https://api.github.com/users/octocat/repos",
                                    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                                    "received_events_url": "https://api.github.com/users/octocat/received_events",
                                    "type": "User",
                                    "site_admin": false
                                }
                            ]
                            ```
                2. Membership
                    1. Get organization membership
                        1. In order to get a user's membership with an organization, the authenticated user must be an organization member.
                        2. `/orgs/:org/memberships/:username`
                        3. state: active, pending
                        4. role: admin, member
                            ```
                            Status: 200 OK
                            {
                                "url": "https://api.github.com/orgs/octocat/memberships/defunkt",
                                "state": "active",
                                "role": "admin",
                                "organization_url": "https://api.github.com/orgs/octocat",
                                "organization": {
                                    "login": "github",
                                    "id": 1,
                                    "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
                                    "url": "https://api.github.com/orgs/github",
                                    "repos_url": "https://api.github.com/orgs/github/repos",
                                    "events_url": "https://api.github.com/orgs/github/events",
                                    "hooks_url": "https://api.github.com/orgs/github/hooks",
                                    "issues_url": "https://api.github.com/orgs/github/issues",
                                    "members_url": "https://api.github.com/orgs/github/members{/member}",
                                    "public_members_url": "https://api.github.com/orgs/github/public_members{/member}",
                                    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                    "description": "A great organization"
                                },
                                "user": {
                                    "login": "octocat",
                                    "id": 1,
                                    "node_id": "MDQ6VXNlcjE=",
                                    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                    "gravatar_id": "",
                                    "url": "https://api.github.com/users/octocat",
                                    "html_url": "https://github.com/octocat",
                                    "followers_url": "https://api.github.com/users/octocat/followers",
                                    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                                    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                                    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                                    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                                    "organizations_url": "https://api.github.com/users/octocat/orgs",
                                    "repos_url": "https://api.github.com/users/octocat/repos",
                                    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                                    "received_events_url": "https://api.github.com/users/octocat/received_events",
                                    "type": "User",
                                    "site_admin": false
                                }
                            }
                            ```
                    2. List your organization memberships
                        1. `/user/memberships/orgs`
                            ```
                            Status: 200 OK
                            Link: <https://api.github.com/resource?page=2>; rel="next",
                                <https://api.github.com/resource?page=5>; rel="last"
                            [
                                {
                                    "url": "https://api.github.com/orgs/octocat/memberships/defunkt",
                                    "state": "active",
                                    "role": "admin",
                                    "organization_url": "https://api.github.com/orgs/octocat",
                                    "organization": {
                                    "login": "github",
                                    "id": 1,
                                    "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
                                    "url": "https://api.github.com/orgs/github",
                                    "repos_url": "https://api.github.com/orgs/github/repos",
                                    "events_url": "https://api.github.com/orgs/github/events",
                                    "hooks_url": "https://api.github.com/orgs/github/hooks",
                                    "issues_url": "https://api.github.com/orgs/github/issues",
                                    "members_url": "https://api.github.com/orgs/github/members{/member}",
                                    "public_members_url": "https://api.github.com/orgs/github/public_members{/member}",
                                    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                    "description": "A great organization"
                                    },
                                    "user": {
                                    "login": "octocat",
                                    "id": 1,
                                    "node_id": "MDQ6VXNlcjE=",
                                    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                    "gravatar_id": "",
                                    "url": "https://api.github.com/users/octocat",
                                    "html_url": "https://github.com/octocat",
                                    "followers_url": "https://api.github.com/users/octocat/followers",
                                    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                                    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                                    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                                    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                                    "organizations_url": "https://api.github.com/users/octocat/orgs",
                                    "repos_url": "https://api.github.com/users/octocat/repos",
                                    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                                    "received_events_url": "https://api.github.com/users/octocat/received_events",
                                    "type": "User",
                                    "site_admin": false
                                    }
                                },
                                {
                                    "url": "https://api.github.com/orgs/invitocat/memberships/defunkt",
                                    "state": "pending",
                                    "role": "admin",
                                    "organization_url": "https://api.github.com/orgs/invitocat",
                                    "organization": {
                                    "login": "github",
                                    "id": 1,
                                    "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
                                    "url": "https://api.github.com/orgs/github",
                                    "repos_url": "https://api.github.com/orgs/github/repos",
                                    "events_url": "https://api.github.com/orgs/github/events",
                                    "hooks_url": "https://api.github.com/orgs/github/hooks",
                                    "issues_url": "https://api.github.com/orgs/github/issues",
                                    "members_url": "https://api.github.com/orgs/github/members{/member}",
                                    "public_members_url": "https://api.github.com/orgs/github/public_members{/member}",
                                    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                    "description": "A great organization"
                                    },
                                    "user": {
                                    "login": "octocat",
                                    "id": 1,
                                    "node_id": "MDQ6VXNlcjE=",
                                    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                    "gravatar_id": "",
                                    "url": "https://api.github.com/users/octocat",
                                    "html_url": "https://github.com/octocat",
                                    "followers_url": "https://api.github.com/users/octocat/followers",
                                    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                                    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                                    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                                    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                                    "organizations_url": "https://api.github.com/users/octocat/orgs",
                                    "repos_url": "https://api.github.com/users/octocat/repos",
                                    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                                    "received_events_url": "https://api.github.com/users/octocat/received_events",
                                    "type": "User",
                                    "site_admin": false
                                    }
                                }
                            ]
                            ```
                    3. Get your organization membership
                        1. `/user/memberships/orgs/:org`
                            ```
                            Status: 200 OK
                            {
                                "url": "https://api.github.com/orgs/invitocat/memberships/defunkt",
                                "state": "pending",
                                "role": "admin",
                                "organization_url": "https://api.github.com/orgs/invitocat",
                                "organization": {
                                    "login": "github",
                                    "id": 1,
                                    "node_id": "MDEyOk9yZ2FuaXphdGlvbjE=",
                                    "url": "https://api.github.com/orgs/github",
                                    "repos_url": "https://api.github.com/orgs/github/repos",
                                    "events_url": "https://api.github.com/orgs/github/events",
                                    "hooks_url": "https://api.github.com/orgs/github/hooks",
                                    "issues_url": "https://api.github.com/orgs/github/issues",
                                    "members_url": "https://api.github.com/orgs/github/members{/member}",
                                    "public_members_url": "https://api.github.com/orgs/github/public_members{/member}",
                                    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                    "description": "A great organization"
                                },
                                "user": {
                                    "login": "octocat",
                                    "id": 1,
                                    "node_id": "MDQ6VXNlcjE=",
                                    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                                    "gravatar_id": "",
                                    "url": "https://api.github.com/users/octocat",
                                    "html_url": "https://github.com/octocat",
                                    "followers_url": "https://api.github.com/users/octocat/followers",
                                    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                                    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                                    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                                    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                                    "organizations_url": "https://api.github.com/users/octocat/orgs",
                                    "repos_url": "https://api.github.com/users/octocat/repos",
                                    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                                    "received_events_url": "https://api.github.com/users/octocat/received_events",
                                    "type": "User",
                                    "site_admin": false
                                }
                            }
                            ```

