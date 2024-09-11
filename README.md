# Evolve Sample Modules
## Overview
This repository contains sample modules used as templates for creating new custom modules.
## Structure
Each sample module is a separate directory. Directory must contain the following files:
- index.ts
- package.json

Any other files or directories are ignored. You can add README.md or changelog.md files to provide additional information about the module.

### index.ts
This file contains the module implementation with same format as custom modules. You can develop files in custom module editor in cloud to make sure your sample is valid.
### package.json
This file contains metadata for the sample module. It must contain the following fields:
- displayName - the name of the sample module visible in the UI
- description - a brief description of the module

It can also contain the following optional fields:
- fromVersion - the version of the cloud from which the module is supported (must be present if using feature introduced from specific version)
- toVersion - the version of the cloud to which the module is supported (used mostly for deprecated modules)

If field fromVersion and toVersion are not present, the module is considered to be supported in all versions of the cloud.

## How to add more samples
If you have a module that you think would be useful for others, you can add it to this repository. To do so, follow these steps:
1. Create a new directory in the root of the repository.
2. Add the index.ts and package.json files to the directory.
3. Commit the changes to the repository.
4. Create a pull request to the main branch of the repository.
5. Once the pull request is approved by our developers, the sample module will be available to all users. Note it may take some time for the module to be available in the cloud.
6. If you want to update the module, you can do so by updating the files in the directory and creating a new pull request.
