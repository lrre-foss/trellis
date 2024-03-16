// This is during the RBXGS era
// Uses the more rudimentary SOAP envelopes
// Note that return types here are ever-evolving, but between the major version timestamps here they tend to be the same.

// 11/1/2007 (0.3.601.0)
[
    "GetStandardOutMessages",
    "GetAllEnvironments",
    "Execute",
    "CloseAllEnvironments",
    "CloseOrphanedEnvironments",
    "CloseEnvironment",
    "OpenEnvironment",
    "Update",
    "GetStatus",
    "GetVersion",
    "HelloWorld"
]

// This is the first version calling it jobs
// 12/20/2007 (0.3.676.0)
[
    "GetStandardOutMessages",
    "GetAllJobs",
    "CloseTimedoutJobs",
    "CloseAllJobs",
    "CloseOrphanedJobs",
    "GetTimeout",
    "BatchJob",
    "CloseJob",
    "Execute",
    "TouchJob",
    "OpenJob",
    "Update",
    "GetStatus",
    "GetVersion",
    "HelloWorld"
]

// Some improvements to the schema here:
// 1/16/2008 (0.3.696.0) (Last RBXGS)
[
    "GetStandardOutMessages",
    "GetAllJobs",
    "CloseExpiredJobs",
    "CloseAllJobs",
    "GetExpiration",
    "BatchJob",
    "CloseJob",
    "Execute",
    "RenewLease",
    "OpenJob",
    "GetStatus",
    "GetVersion",
    "HelloWorld"
]