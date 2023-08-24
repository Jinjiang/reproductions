// import Foo from './foo'

// import Foo from 'x/foo'

// // doesn't work
// import Foo from './node_modules/foo'

// // doesn't work
// import Foo from './node_modules/.xnpm/this_is_a_random_folder_which_is_managed_by_a_package_manager/x/foo'

// // Let's assume there is a file outside this repo

// import Foo from '../temp/foo'

// // doesn't work
// import Foo from '../temp/node_modules/foo'

// // doesn't work
// import Foo from '../temp/node_modules/x/foo'

console.log(Foo)