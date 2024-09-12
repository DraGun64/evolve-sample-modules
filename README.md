# Evolve Sample Modules
## Overview
This repository contains sample modules used as templates for creating new custom modules.
## Structure
Each sample module is a separate directory. The directory must contain the following files:
- index.ts
- package.json

Any other files or directories are ignored. You can add README.md or changelog.md files to provide additional information about the module.

### index.ts
This file contains the module implementation in the same format as custom modules. You can develop the file in the custom module editor in Quadient Cloud to ensure that your sample is valid.
### package.json
This file contains metadata for the sample module. It must contain the following fields:
- displayName - The name of the sample module visible in the UI.
- description - A brief description of the module.

It can also contain the following optional fields:
- fromVersion - The version of Quadient Cloud from which the module is supported (this must be present if using features introduced in a specific version).
- toVersion - The version of Quadient Cloud up to which the module is supported (used mostly for deprecated modules).

If field fromVersion and toVersion are not present, the module is considered to be supported in all versions of Quadient Cloud.

## Adding More Samples
If you have a module that you think would be useful for others, you can add it to this repository:
1. Create a new directory in the root of the repository.
2. Add the index.ts and package.json files to the directory.
3. Commit the changes to the repository.
4. Create a pull request to the main branch of the repository.
5. Once our developers approve the pull request, the sample module will be available to all users. Note that it may take some time for the module to be available.
6. If you want to update the module, you can do so by updating the files in the directory and creating a new pull request.
