// This version of Grid still uses SOAP, but it relies on JSON envelopes
// First sighted in 10/29/2017 (0.314.0.159032) and has likely remained ever since
// These methods were compiled from reverse engineering a Roblox Grid assembly dated 2021, need to cross-check with available binaries

{
    "Mode": "EvictPlayer",
    "Settings": {
        "PlayerId": int64_t
    }
}

{
    "Mode": "GameServer",
    "Settings": {
        "PlaceId": int64_t,
        "UniverseId": int64_t,
        "MatchmakingContextId": int32_t,
        "JobSignature": string,
        "GameCode": string,
        "BaseUrl": string,
        "GameId": Guid,
        "MachineAddress": string,
        "ServerId": int32_t,
        "GsmInterval": int32_t,
        "MaxPlayers": int32_t,
        "MaxGameInstances": int32_t,
        "ApiKey": string,
        "PreferredPlayerCapacity": int32_t,
        "PlaceVisitAccessKey": string,
        "DatacenterId": int32_t,
        "CreatorId": int64_t,
        "CreatorType": string,
        "PlaceVersion": int32_t,
        "VipOwnerId": int64_t?,
        "PlaceFetchUrl": string,
        "Metadata": string 
    }
}

{
    "Mode": "RunMicroProfiler",
    "Settings": {
        "SecondsToRecord": double,
        "OutputFileName": string
    }
}

{
    "Mode": "ServerAction",
    "Settings": {
        "Action": ServerActionType,   // Shutdown
        "Reason": ServerActionReason, // Roblox, Developer
        "VerboseReason": string
    }
}

{
    "Mode": "SetLimits",
    "Limits": {
        "MaximumCores": double,
        "MaximumThreads": int64_t,
        "MaximumMemoryMB": int64_t,
        "SchedulerCpuPeriod": int64_t
    }
}

/**
 * ThumbnailCommandType supports the following values:
 * - Unknown
 * - Avatar_R15_Action
 * - Avatar_R15_Standard
 * - AvatarAnimation
 * - BodyPart
 * - Closeup
 * - Decal
 * - Gear
 * - Hat
 * - Head
 * - Mesh
 * - MeshPart
 * - Model
 * - Package
 * - Pants
 * - Place
 * - Shirt
 * - AnimationManifest
 * - Face
 * - AnimationSilhouette
 * - TexturePack
 *
 * IMPORTANT NOTE: If the ThumbnailCommandType is set to TexturePack, then the Mode must be set to ExecuteScript.
 */
{
    "Mode": "Thumbnail",
    "Settings": {
        "Type": ThumbnailCommandType,
        "Arguments": array<string>
    }
}