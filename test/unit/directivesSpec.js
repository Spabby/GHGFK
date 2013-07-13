'use strict';

/* jasmine specs for directives go here */

describe('maks3w.github.directives', function () {
  beforeEach(module('maks3w.github.directives'));

  describe('merge-button', function () {
    it('should show merge options', function () {
      module(function ($provide) {
        $provide.value('f', 'TEST_VER');
      });
      inject(function ($compile, $rootScope) {
        $rootScope.pr =   {
          "url": "https://api.github.com/repos/zendframework/zf2-documentation/pulls/959",
          "id": 6908060,
          "html_url": "https://github.com/zendframework/zf2-documentation/pull/959",
          "diff_url": "https://github.com/zendframework/zf2-documentation/pull/959.diff",
          "patch_url": "https://github.com/zendframework/zf2-documentation/pull/959.patch",
          "issue_url": "https://github.com/zendframework/zf2-documentation/issues/959",
          "number": 959,
          "state": "open",
          "title": "HTML outputs for the code examples in Zend\\Tag and Zend\\Tag\\Cloud added",
          "user": {
            "login": "froschdesign",
            "id": 103362,
            "avatar_url": "https://secure.gravatar.com/avatar/b7722fb71a14a919cc1289794b3fb1fc?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
            "gravatar_id": "b7722fb71a14a919cc1289794b3fb1fc",
            "url": "https://api.github.com/users/froschdesign",
            "html_url": "https://github.com/froschdesign",
            "followers_url": "https://api.github.com/users/froschdesign/followers",
            "following_url": "https://api.github.com/users/froschdesign/following{/other_user}",
            "gists_url": "https://api.github.com/users/froschdesign/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/froschdesign/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/froschdesign/subscriptions",
            "organizations_url": "https://api.github.com/users/froschdesign/orgs",
            "repos_url": "https://api.github.com/users/froschdesign/repos",
            "events_url": "https://api.github.com/users/froschdesign/events{/privacy}",
            "received_events_url": "https://api.github.com/users/froschdesign/received_events",
            "type": "User"
          },
          "body": "",
          "created_at": "2013-07-13T06:23:59Z",
          "updated_at": "2013-07-13T06:26:00Z",
          "closed_at": null,
          "merged_at": null,
          "merge_commit_sha": "84c7a5d6dc09d01433e9b2d3e5987ac4aa4a4481",
          "assignee": null,
          "milestone": null,
          "commits_url": "https://github.com/zendframework/zf2-documentation/pull/959/commits",
          "review_comments_url": "https://github.com/zendframework/zf2-documentation/pull/959/comments",
          "review_comment_url": "/repos/zendframework/zf2-documentation/pulls/comments/{number}",
          "comments_url": "https://api.github.com/repos/zendframework/zf2-documentation/issues/959/comments",
          "head": {
            "label": "froschdesign:hotfix/zend-tag-cloud",
            "ref": "hotfix/zend-tag-cloud",
            "sha": "159de4fcde94c1a0ca60f5c722cf8d6caa940d33",
            "user": {
              "login": "froschdesign",
              "id": 103362,
              "avatar_url": "https://secure.gravatar.com/avatar/b7722fb71a14a919cc1289794b3fb1fc?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
              "gravatar_id": "b7722fb71a14a919cc1289794b3fb1fc",
              "url": "https://api.github.com/users/froschdesign",
              "html_url": "https://github.com/froschdesign",
              "followers_url": "https://api.github.com/users/froschdesign/followers",
              "following_url": "https://api.github.com/users/froschdesign/following{/other_user}",
              "gists_url": "https://api.github.com/users/froschdesign/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/froschdesign/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/froschdesign/subscriptions",
              "organizations_url": "https://api.github.com/users/froschdesign/orgs",
              "repos_url": "https://api.github.com/users/froschdesign/repos",
              "events_url": "https://api.github.com/users/froschdesign/events{/privacy}",
              "received_events_url": "https://api.github.com/users/froschdesign/received_events",
              "type": "User"
            },
            "repo": {
              "id": 8070367,
              "name": "zf2-documentation",
              "full_name": "froschdesign/zf2-documentation",
              "owner": {
                "login": "froschdesign",
                "id": 103362,
                "avatar_url": "https://secure.gravatar.com/avatar/b7722fb71a14a919cc1289794b3fb1fc?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
                "gravatar_id": "b7722fb71a14a919cc1289794b3fb1fc",
                "url": "https://api.github.com/users/froschdesign",
                "html_url": "https://github.com/froschdesign",
                "followers_url": "https://api.github.com/users/froschdesign/followers",
                "following_url": "https://api.github.com/users/froschdesign/following{/other_user}",
                "gists_url": "https://api.github.com/users/froschdesign/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/froschdesign/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/froschdesign/subscriptions",
                "organizations_url": "https://api.github.com/users/froschdesign/orgs",
                "repos_url": "https://api.github.com/users/froschdesign/repos",
                "events_url": "https://api.github.com/users/froschdesign/events{/privacy}",
                "received_events_url": "https://api.github.com/users/froschdesign/received_events",
                "type": "User"
              },
              "private": false,
              "html_url": "https://github.com/froschdesign/zf2-documentation",
              "description": "Zend Framework 2 documentation sources",
              "fork": true,
              "url": "https://api.github.com/repos/froschdesign/zf2-documentation",
              "forks_url": "https://api.github.com/repos/froschdesign/zf2-documentation/forks",
              "keys_url": "https://api.github.com/repos/froschdesign/zf2-documentation/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/froschdesign/zf2-documentation/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/froschdesign/zf2-documentation/teams",
              "hooks_url": "https://api.github.com/repos/froschdesign/zf2-documentation/hooks",
              "issue_events_url": "https://api.github.com/repos/froschdesign/zf2-documentation/issues/events{/number}",
              "events_url": "https://api.github.com/repos/froschdesign/zf2-documentation/events",
              "assignees_url": "https://api.github.com/repos/froschdesign/zf2-documentation/assignees{/user}",
              "branches_url": "https://api.github.com/repos/froschdesign/zf2-documentation/branches{/branch}",
              "tags_url": "https://api.github.com/repos/froschdesign/zf2-documentation/tags",
              "blobs_url": "https://api.github.com/repos/froschdesign/zf2-documentation/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/froschdesign/zf2-documentation/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/froschdesign/zf2-documentation/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/froschdesign/zf2-documentation/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/froschdesign/zf2-documentation/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/froschdesign/zf2-documentation/languages",
              "stargazers_url": "https://api.github.com/repos/froschdesign/zf2-documentation/stargazers",
              "contributors_url": "https://api.github.com/repos/froschdesign/zf2-documentation/contributors",
              "subscribers_url": "https://api.github.com/repos/froschdesign/zf2-documentation/subscribers",
              "subscription_url": "https://api.github.com/repos/froschdesign/zf2-documentation/subscription",
              "commits_url": "https://api.github.com/repos/froschdesign/zf2-documentation/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/froschdesign/zf2-documentation/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/froschdesign/zf2-documentation/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/froschdesign/zf2-documentation/issues/comments/{number}",
              "contents_url": "https://api.github.com/repos/froschdesign/zf2-documentation/contents/{+path}",
              "compare_url": "https://api.github.com/repos/froschdesign/zf2-documentation/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/froschdesign/zf2-documentation/merges",
              "archive_url": "https://api.github.com/repos/froschdesign/zf2-documentation/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/froschdesign/zf2-documentation/downloads",
              "issues_url": "https://api.github.com/repos/froschdesign/zf2-documentation/issues{/number}",
              "pulls_url": "https://api.github.com/repos/froschdesign/zf2-documentation/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/froschdesign/zf2-documentation/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/froschdesign/zf2-documentation/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/froschdesign/zf2-documentation/labels{/name}",
              "created_at": "2013-02-07T09:58:31Z",
              "updated_at": "2013-07-13T06:26:00Z",
              "pushed_at": "2013-07-13T06:22:21Z",
              "git_url": "git://github.com/froschdesign/zf2-documentation.git",
              "ssh_url": "git@github.com:froschdesign/zf2-documentation.git",
              "clone_url": "https://github.com/froschdesign/zf2-documentation.git",
              "svn_url": "https://github.com/froschdesign/zf2-documentation",
              "homepage": null,
              "size": 412,
              "watchers_count": 0,
              "language": "Python",
              "has_issues": false,
              "has_downloads": true,
              "has_wiki": false,
              "forks_count": 0,
              "mirror_url": null,
              "open_issues_count": 0,
              "forks": 0,
              "open_issues": 0,
              "watchers": 0,
              "master_branch": "master",
              "default_branch": "master"
            }
          },
          "base": {
            "label": "zendframework:master",
            "ref": "master",
            "sha": "e7bc4da3e5505ef4c50a402c799d86e0a15c7c2b",
            "user": {
              "login": "zendframework",
              "id": 296074,
              "avatar_url": "https://secure.gravatar.com/avatar/460576a0866d93fdacb597da4b90f233?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png",
              "gravatar_id": "460576a0866d93fdacb597da4b90f233",
              "url": "https://api.github.com/users/zendframework",
              "html_url": "https://github.com/zendframework",
              "followers_url": "https://api.github.com/users/zendframework/followers",
              "following_url": "https://api.github.com/users/zendframework/following{/other_user}",
              "gists_url": "https://api.github.com/users/zendframework/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/zendframework/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/zendframework/subscriptions",
              "organizations_url": "https://api.github.com/users/zendframework/orgs",
              "repos_url": "https://api.github.com/users/zendframework/repos",
              "events_url": "https://api.github.com/users/zendframework/events{/privacy}",
              "received_events_url": "https://api.github.com/users/zendframework/received_events",
              "type": "Organization"
            },
            "repo": {
              "id": 4959563,
              "name": "zf2-documentation",
              "full_name": "zendframework/zf2-documentation",
              "owner": {
                "login": "zendframework",
                "id": 296074,
                "avatar_url": "https://secure.gravatar.com/avatar/460576a0866d93fdacb597da4b90f233?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png",
                "gravatar_id": "460576a0866d93fdacb597da4b90f233",
                "url": "https://api.github.com/users/zendframework",
                "html_url": "https://github.com/zendframework",
                "followers_url": "https://api.github.com/users/zendframework/followers",
                "following_url": "https://api.github.com/users/zendframework/following{/other_user}",
                "gists_url": "https://api.github.com/users/zendframework/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/zendframework/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/zendframework/subscriptions",
                "organizations_url": "https://api.github.com/users/zendframework/orgs",
                "repos_url": "https://api.github.com/users/zendframework/repos",
                "events_url": "https://api.github.com/users/zendframework/events{/privacy}",
                "received_events_url": "https://api.github.com/users/zendframework/received_events",
                "type": "Organization"
              },
              "private": false,
              "html_url": "https://github.com/zendframework/zf2-documentation",
              "description": "Zend Framework 2 documentation sources",
              "fork": false,
              "url": "https://api.github.com/repos/zendframework/zf2-documentation",
              "forks_url": "https://api.github.com/repos/zendframework/zf2-documentation/forks",
              "keys_url": "https://api.github.com/repos/zendframework/zf2-documentation/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/zendframework/zf2-documentation/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/zendframework/zf2-documentation/teams",
              "hooks_url": "https://api.github.com/repos/zendframework/zf2-documentation/hooks",
              "issue_events_url": "https://api.github.com/repos/zendframework/zf2-documentation/issues/events{/number}",
              "events_url": "https://api.github.com/repos/zendframework/zf2-documentation/events",
              "assignees_url": "https://api.github.com/repos/zendframework/zf2-documentation/assignees{/user}",
              "branches_url": "https://api.github.com/repos/zendframework/zf2-documentation/branches{/branch}",
              "tags_url": "https://api.github.com/repos/zendframework/zf2-documentation/tags",
              "blobs_url": "https://api.github.com/repos/zendframework/zf2-documentation/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/zendframework/zf2-documentation/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/zendframework/zf2-documentation/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/zendframework/zf2-documentation/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/zendframework/zf2-documentation/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/zendframework/zf2-documentation/languages",
              "stargazers_url": "https://api.github.com/repos/zendframework/zf2-documentation/stargazers",
              "contributors_url": "https://api.github.com/repos/zendframework/zf2-documentation/contributors",
              "subscribers_url": "https://api.github.com/repos/zendframework/zf2-documentation/subscribers",
              "subscription_url": "https://api.github.com/repos/zendframework/zf2-documentation/subscription",
              "commits_url": "https://api.github.com/repos/zendframework/zf2-documentation/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/zendframework/zf2-documentation/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/zendframework/zf2-documentation/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/zendframework/zf2-documentation/issues/comments/{number}",
              "contents_url": "https://api.github.com/repos/zendframework/zf2-documentation/contents/{+path}",
              "compare_url": "https://api.github.com/repos/zendframework/zf2-documentation/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/zendframework/zf2-documentation/merges",
              "archive_url": "https://api.github.com/repos/zendframework/zf2-documentation/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/zendframework/zf2-documentation/downloads",
              "issues_url": "https://api.github.com/repos/zendframework/zf2-documentation/issues{/number}",
              "pulls_url": "https://api.github.com/repos/zendframework/zf2-documentation/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/zendframework/zf2-documentation/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/zendframework/zf2-documentation/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/zendframework/zf2-documentation/labels{/name}",
              "created_at": "2012-07-09T14:48:47Z",
              "updated_at": "2013-07-13T08:52:21Z",
              "pushed_at": "2013-07-13T08:52:20Z",
              "git_url": "git://github.com/zendframework/zf2-documentation.git",
              "ssh_url": "git@github.com:zendframework/zf2-documentation.git",
              "clone_url": "https://github.com/zendframework/zf2-documentation.git",
              "svn_url": "https://github.com/zendframework/zf2-documentation",
              "homepage": null,
              "size": 6256,
              "watchers_count": 141,
              "language": "Python",
              "has_issues": true,
              "has_downloads": true,
              "has_wiki": false,
              "forks_count": 441,
              "mirror_url": null,
              "open_issues_count": 45,
              "forks": 441,
              "open_issues": 45,
              "watchers": 141,
              "master_branch": "master",
              "default_branch": "master"
            }
          },
          "_links": {
            "self": {
              "href": "https://api.github.com/repos/zendframework/zf2-documentation/pulls/959"
            },
            "html": {
              "href": "https://github.com/zendframework/zf2-documentation/pull/959"
            },
            "issue": {
              "href": "https://api.github.com/repos/zendframework/zf2-documentation/issues/959"
            },
            "comments": {
              "href": "https://api.github.com/repos/zendframework/zf2-documentation/issues/959/comments"
            },
            "review_comments": {
              "href": "https://api.github.com/repos/zendframework/zf2-documentation/pulls/959/comments"
            }
          }
        };
        var element = $compile('<merge-button pr="pr"/>')($rootScope);
        expect(element.html()).toEqual('<label>Patch type<select ng-model="patchType" required="" class="ng-pristine ng-valid"><option value="">Select patch type</option><option value="hotfix">Hotfix</option><option value="feature">Feature</option></select></label><label>Commit msg <input type="text" ng-model="commitMsg" ng-bind="Merge PR #{{pr.number}}" required="" class="ng-pristine ng-valid ng-binding"></label><div class="control-group"><!-- ngRepeat: (branch, merge) in branches --></div><input type="submit" class="btn btn-danger" value="Merge" ng-disabled="mergeFrm.$invalid">');
      });
    });
  });
});