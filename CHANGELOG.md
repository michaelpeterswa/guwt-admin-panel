# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.7.0](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.6.2...v1.7.0) (2021-03-04)


### Features

* added a modul to show the tour info, and added a form input in edit tour view to add a description ([9b93027](https://github.com/michaelpeterswa/guwt-admin-panel/commit/9b9302751bece5987c3270716ead408ecc465600))
* added modal to show stop info ([8ce15ce](https://github.com/michaelpeterswa/guwt-admin-panel/commit/8ce15ce716816b163c215a48a3bc78c837dc3a25))
* implemented enabling tours ([fa665a7](https://github.com/michaelpeterswa/guwt-admin-panel/commit/fa665a727a9d64cd6cf21cba21f28deaae8e0176))


### Bug Fixes

* corrected .env assignments and the incorrect environment vars (password and maps) ([fbfdac5](https://github.com/michaelpeterswa/guwt-admin-panel/commit/fbfdac5908aae502f7197279a13cfb7d437cf910))

### [1.6.2](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.6.1...v1.6.2) (2021-03-04)


### Bug Fixes

* fixed broken unit tests ([6568fbd](https://github.com/michaelpeterswa/guwt-admin-panel/commit/6568fbd794ee272f4c07f4a3f8f838098210b183))

### [1.6.1](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.6.0...v1.6.1) (2021-03-04)

## [1.6.0](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.5.0...v1.6.0) (2021-03-03)


### Features

* added a button to request to be a member and added lists of current and prospective members within the member view ([de4e634](https://github.com/michaelpeterswa/guwt-admin-panel/commit/de4e6340fe06bb587cf5c0eb49f304e3d344ea7b))
* added a list of stops when in the tour edit mode, and worked on deleting tours ([9978af6](https://github.com/michaelpeterswa/guwt-admin-panel/commit/9978af65f4ce8a4f6cacf0e09df2414ac35c6b8a))
* added a table to the media view to display media ([574af5a](https://github.com/michaelpeterswa/guwt-admin-panel/commit/574af5a9c16e2250635b1c0c9d36590c50ed623d))
* added adding/deleting/editing tours and stops ([997e8b8](https://github.com/michaelpeterswa/guwt-admin-panel/commit/997e8b82f5ee6de224168ad89a430acbc0da8168))
* added more comments ([8681ce6](https://github.com/michaelpeterswa/guwt-admin-panel/commit/8681ce6f28d42fc8113d1faaf561b105448b649b))
* added table of tours for the home view ([c6a2ffa](https://github.com/michaelpeterswa/guwt-admin-panel/commit/c6a2ffa278479e7fbda7cdbc81e48823d5694a05))
* added tutorial button ([de941b7](https://github.com/michaelpeterswa/guwt-admin-panel/commit/de941b715c6be8cbc741206837a19dd9e42dc7dd))
* adding and deleting tours is now connected to the database ([246a2f0](https://github.com/michaelpeterswa/guwt-admin-panel/commit/246a2f015fab2c2f7eb085c8fa534f557ebf3651))
* cleaned up files, added documentation, added uploading files in the media panel ([7756c50](https://github.com/michaelpeterswa/guwt-admin-panel/commit/7756c506a07be2cf8c35b5a043a61b4998d2ab31))
* connected editing tours, and adding, editing, and deleting stops to the database ([3c994b3](https://github.com/michaelpeterswa/guwt-admin-panel/commit/3c994b3b0a128cb605de1db8034540c417414862))
* fixed the infinite loops and added the create media ([e9f5551](https://github.com/michaelpeterswa/guwt-admin-panel/commit/e9f5551b4523bc8c0a365614a9ce9e59d635e64f))
* fixed up the media view ([baf3d01](https://github.com/michaelpeterswa/guwt-admin-panel/commit/baf3d013c8ffe6ba5e9eade2ff54219c0103c834))
* implemented adding a tour and started working on editing a tour ([7b200c1](https://github.com/michaelpeterswa/guwt-admin-panel/commit/7b200c142debbbaf7610a3948e050e881b84e15b))
* implemented google maps ([45ffa30](https://github.com/michaelpeterswa/guwt-admin-panel/commit/45ffa306a128b604eb116e15a0da06febef7775b))
* merging from upstream ([43907d6](https://github.com/michaelpeterswa/guwt-admin-panel/commit/43907d632b7b992f319d1bf69e978b9602e49769))
* renamed file names to be more consistent ([b00a289](https://github.com/michaelpeterswa/guwt-admin-panel/commit/b00a2892ac15172bd8a73850338334143e23eb9f))
* updated ui ([43f2b36](https://github.com/michaelpeterswa/guwt-admin-panel/commit/43f2b361105a232fa22c0ed8c359ab764dcc5643))
* users can rearrange stops ([cc111ca](https://github.com/michaelpeterswa/guwt-admin-panel/commit/cc111cae17ba3d1d4aa259db6f0140813565cb1a))
* users can request to be a moderator and current moderators can accept or decline ([6fa6c5a](https://github.com/michaelpeterswa/guwt-admin-panel/commit/6fa6c5a018e446deb484ed87c189b166694fca3a))
* working on uploading images ([6234a40](https://github.com/michaelpeterswa/guwt-admin-panel/commit/6234a4067163b58f671c79505aacb4581cc26f70))


### Bug Fixes

* admins can no longer create duplicate organizations ([c3d3cbd](https://github.com/michaelpeterswa/guwt-admin-panel/commit/c3d3cbd7cdea8477972c6c69948aadcd78a38dcf))
* CSS Tweaks related to marginTop (repl. with paddingTop) and photoshopped bg ([f3e597e](https://github.com/michaelpeterswa/guwt-admin-panel/commit/f3e597e94724586868c4f6b3c41f56c26b12aef2))
* delete organization button is only available to admins, not moderators ([37c59c7](https://github.com/michaelpeterswa/guwt-admin-panel/commit/37c59c769cd2076931e967bb53799cef532d4455))
* deleting an organization now deletes the organization's tours as well ([caea041](https://github.com/michaelpeterswa/guwt-admin-panel/commit/caea041c1f14142b791068d44e25177d72949960))
* fixing infinite loops ([6376bc8](https://github.com/michaelpeterswa/guwt-admin-panel/commit/6376bc844faa14ec1444c50c9db0e03304b8f3d9))
* last minute UI changes for the presentation demo ([b25484b](https://github.com/michaelpeterswa/guwt-admin-panel/commit/b25484b0f8029ff648af66b2914630b0675e5ed4))
* moved google maps api key to env ([f783be3](https://github.com/michaelpeterswa/guwt-admin-panel/commit/f783be376ff5b5e29ecde463e9b7be43af8d6081))
* no longer crashes after clicking edit stop right after creating it ([f5553c3](https://github.com/michaelpeterswa/guwt-admin-panel/commit/f5553c3663cad2905e947eb611b9a5db65180aab))
* organization dropdown rerender whenever a new orgainzation is added ([4ae3db9](https://github.com/michaelpeterswa/guwt-admin-panel/commit/4ae3db906913f7d0ded2cbd9de62927349d3cf47))
* package.json & package-lock.json to reduce vulnerabilities ([a8c71fb](https://github.com/michaelpeterswa/guwt-admin-panel/commit/a8c71fb037d88a0f53f852c8ab22be352d3a1b99))
* resolved most warnings ([4d608c8](https://github.com/michaelpeterswa/guwt-admin-panel/commit/4d608c8a091cf5f27a5af33294933dd472552eb3))

## [1.5.0](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.4.1...v1.5.0) (2020-12-09)


### Features

* added a confirmation dialog when deleting an organization ([b3c2704](https://github.com/michaelpeterswa/guwt-admin-panel/commit/b3c27042224fe1b5a9e9c8246b29a9369488a377))
* added a navigation bar to the organization home screen ([538d4f0](https://github.com/michaelpeterswa/guwt-admin-panel/commit/538d4f0792c87403b3e686bb8923777af4082985))
* added NewOrganization.js which adds an organization ([f4ce202](https://github.com/michaelpeterswa/guwt-admin-panel/commit/f4ce2023bae67021afe470164e67ccee8e0f9616))
* added the username when creating a new organization ([65557f8](https://github.com/michaelpeterswa/guwt-admin-panel/commit/65557f83280aead8bd32130ebd96235cf2d70e0d))
* changed a bunch of things referencing nick's work (which got pulled into testing branch) ([7320ca6](https://github.com/michaelpeterswa/guwt-admin-panel/commit/7320ca6559a9d04b643b22c95296269faf29d80c))
* changed adding a new organization to be a bootrap modal ([70dda08](https://github.com/michaelpeterswa/guwt-admin-panel/commit/70dda08beb49051563ae305090d60ae9b10d1f28))
* changed new org modal to have success alert and utilize form controls ([0e320f1](https://github.com/michaelpeterswa/guwt-admin-panel/commit/0e320f14c0f9cba46a48d800d92f4f3ad13f848d))
* cleaned up for presentation ([32c2572](https://github.com/michaelpeterswa/guwt-admin-panel/commit/32c25727cc5f48b2063fb76ca0318310e7990503))
* merging from master ([81c4991](https://github.com/michaelpeterswa/guwt-admin-panel/commit/81c49917f106c6596823bbd4c372e0965e9cb881))
* started adding a delete organization component ([4740f1b](https://github.com/michaelpeterswa/guwt-admin-panel/commit/4740f1be72c6f23ea19755a64d6ef98f0a977958))
* users cannot access organizations they are not part of ([d6d7c92](https://github.com/michaelpeterswa/guwt-admin-panel/commit/d6d7c922ac1c56b8b474897627234d606f759e5c))
* when going to the home view of an organization, the organization data gets passed in instead of the organization name ([105f521](https://github.com/michaelpeterswa/guwt-admin-panel/commit/105f5213a93f48df3cbd5906c53c1ed4561683b5))


### Bug Fixes

* fixed the the issue where the was continuous requests made to the server ([856ebcc](https://github.com/michaelpeterswa/guwt-admin-panel/commit/856ebcc482a47881a7203a9f7c375812d6f72f2e))
* fixing the link for posting data to the database ([632da38](https://github.com/michaelpeterswa/guwt-admin-panel/commit/632da387dbd9d7002d534b61790d7c743752ad11))
* no-unused-vars hotfix ([134538c](https://github.com/michaelpeterswa/guwt-admin-panel/commit/134538c4b3100b9d96bf33bdecae8cb762bcd243))
* the NewOrganization component now works ([4e0f24a](https://github.com/michaelpeterswa/guwt-admin-panel/commit/4e0f24a75c9370dac85f75f3a326546e618a405e))

### [1.4.1](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.4.0...v1.4.1) (2020-12-08)

## [1.4.0](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.3.0...v1.4.0) (2020-12-08)


### Features

* added basic bootstrap components ([157f04e](https://github.com/michaelpeterswa/guwt-admin-panel/commit/157f04ef860649168663388d85dff2199e98805d))


### Bug Fixes

* removed unused references and variables ([93261ba](https://github.com/michaelpeterswa/guwt-admin-panel/commit/93261ba22bed7e86f82a7214831d577bf44658c8))

## [1.3.0](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.2.0...v1.3.0) (2020-12-02)


### Features

* added getOrganization API call to the dropdown view ([e61fdc5](https://github.com/michaelpeterswa/guwt-admin-panel/commit/e61fdc5165bbec207fe22ea292f6d0b13f90d3f4))
* added the dropdown to choose an organization ([74aae6f](https://github.com/michaelpeterswa/guwt-admin-panel/commit/74aae6faffbd3f49c505540117f23eb3f3a54840))
* merging forks ([d697175](https://github.com/michaelpeterswa/guwt-admin-panel/commit/d6971755107271b3ea11a1fd901d48ce1695ecb4))


### Bug Fixes

* bump jest from 26.6.3 to 26.6.0 ([c7459c3](https://github.com/michaelpeterswa/guwt-admin-panel/commit/c7459c31d9505854317a6eb844725da4ab6b575e))
* fixed merge conflicts ([867e1e6](https://github.com/michaelpeterswa/guwt-admin-panel/commit/867e1e6d7bf73584060b465b1fd8a1e14df90048))
* temporarily removed jest from dev-dep ([5b1ece4](https://github.com/michaelpeterswa/guwt-admin-panel/commit/5b1ece4cc5893b5b339dbf07544f00e9149434c6))

## [1.2.0](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.1.1...v1.2.0) (2020-11-16)


### Features

* added a bunch of unit tests to bump code coverage up ([0bff4d6](https://github.com/michaelpeterswa/guwt-admin-panel/commit/0bff4d63d28e118dbb87087d64ea554a9c22c878))

### [1.1.1](https://github.com/michaelpeterswa/guwt-admin-panel/compare/v1.1.0...v1.1.1) (2020-11-13)


### Bug Fixes

* removed --colors from Jest testing ([50e7744](https://github.com/michaelpeterswa/guwt-admin-panel/commit/50e774408a13db5ff50c405ad7ba320b3ef4e3bd))

## 1.1.0 (2020-11-13)


### Features

* added Auth0 functionality ([09d7886](https://github.com/michaelpeterswa/guwt-admin-panel/commit/09d7886d4bfb3b1b165b2015a7dfffef0097bd38))
* added empty components for the edit tour view and the edit stop view and added nevigation between them ([3d2fe97](https://github.com/michaelpeterswa/guwt-admin-panel/commit/3d2fe9752ed1982becf6e43e482e00b263258ced))
* added jest and first unit test ([6ea86be](https://github.com/michaelpeterswa/guwt-admin-panel/commit/6ea86bef1e0ed85b023bd011d2e7819ae8c7870c))
* added more comments ([4920cf0](https://github.com/michaelpeterswa/guwt-admin-panel/commit/4920cf084ea3de5f4a5a2664abe3520209374d55))
* added some css ([8c473d6](https://github.com/michaelpeterswa/guwt-admin-panel/commit/8c473d66b343a957cd675bae81b07b667e4a2bda))
* added the components for the different views and implemented navigation between them ([5514630](https://github.com/michaelpeterswa/guwt-admin-panel/commit/55146304cb2530a448526bce016fea55d853caa2))
* added the login view without css and implemented going to the home view after logging in ([093e5c0](https://github.com/michaelpeterswa/guwt-admin-panel/commit/093e5c0e29656af3f55b4e954eb78b687bb96b98))
* create-react-app ([1d6549b](https://github.com/michaelpeterswa/guwt-admin-panel/commit/1d6549b86ca61cd3d039c1d1ea2e7d36e2a1a0ec))
* created LoginForm.js and LoginForm.css. Also started making the login form ([fd92f89](https://github.com/michaelpeterswa/guwt-admin-panel/commit/fd92f89cbf497806266d7ac98ef50819abacb92e))
* finished adding css to the login view. Made a css modules folder with a css file. Removed a lot of the extra css from app.css and index.css ([b5711e0](https://github.com/michaelpeterswa/guwt-admin-panel/commit/b5711e0c17dee43e5831ebd38978505832173433))
* scaffolded test files for each js file ([56de89b](https://github.com/michaelpeterswa/guwt-admin-panel/commit/56de89b5cb741089dc27cd0d433e743a9ba03581))


### Bug Fixes

* fixing the conflicts ([dd1feea](https://github.com/michaelpeterswa/guwt-admin-panel/commit/dd1feea895fd1be6b8cb9800b70fe5c22900bc17))
* merged forks ([2be6e5b](https://github.com/michaelpeterswa/guwt-admin-panel/commit/2be6e5b1a59258c6748a90fe0a47c6435611dba3))
* relocated tests in main src ([cc827d2](https://github.com/michaelpeterswa/guwt-admin-panel/commit/cc827d232c1dade2e4a70995fa2ddec643281692))
* removed sum.js and it's corresponding test case (unused) ([5a241d5](https://github.com/michaelpeterswa/guwt-admin-panel/commit/5a241d5f7cf047b27b0438afc71f55024fa42962))
* Stopped tracking .env File ([c0e2a0a](https://github.com/michaelpeterswa/guwt-admin-panel/commit/c0e2a0a7c6bc77d08e90104f699c62319f1096ae))
* synced my fork with the upstream ([5ff4f84](https://github.com/michaelpeterswa/guwt-admin-panel/commit/5ff4f849072288173b0eb33db00e58df4e8511dc))
