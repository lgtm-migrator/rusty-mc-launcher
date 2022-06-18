import { invoke } from "@tauri-apps/api/tauri";
import type { Account, InstallManifest, Loader, Minecraft, VersionId } from "../types";

export const InvokeNews = (pages: number = 10) => invoke<string>("news", { pages });
export const InvokeGameDir = () => invoke<string>("game_dir");
export const GetVanillaVersions = () => invoke<Array<Minecraft>>("get_vanilla_versions");
export const GetLoaderVersions = (loader: Loader | "none", minecraft: Minecraft) => invoke<Array<string>>("get_loader_versions",{ loader, minecraft });
export const InvokeLogin = () => invoke<void>("login");
export const InvokeLogout = () => invoke<void>("logout");
export const TokenRefresh = (token: string) => invoke<Account>("token_refresh",{ token });
export const CheckVersion = (version: VersionId) => invoke<[boolean,"no_root" | "no_natives" | "no_manifest" | "no_jar" | "ok"]>("check_version",{ version });
export const RunMinecraft = (props: { version: VersionId, profile: Account }) => invoke("run_minecraft",{ params: props });
export const InstallClient = (manifest: InstallManifest) => invoke<void>("install_client", { manifest: JSON.stringify(manifest) });
/**
 *  Log function for printing outout to log file
 * @param msg 
 * @param level 
 * @returns 
 */
export const Log = (msg: string, level: "info" | "warn" | "debug" | "error" | null = null) => invoke<void>("log", { msg, level });
export const InstallNatives = (version: VersionId) => invoke<void>("install_natives",{ version }); 