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

