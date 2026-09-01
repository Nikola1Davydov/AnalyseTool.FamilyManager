# AnalyseTool Family Manager

Family manager for [AnalyseTool](https://github.com/Nikola1Davydov/AnalyzeTool): family palette,
library, batch renaming, purging of unused families and types, placement and a 3D preview.

This is an **extension**, not part of the plugin: it installs and updates on its own.

## Install

Requires AnalyseTool.

1. Download `analysetool.family-manager-<version>.zip` from the
   [latest release](https://github.com/Nikola1Davydov/AnalyseTool.FamilyManager/releases/latest).
2. In Revit: **AnalyseTool → Settings → Extensions → Install from file…** and pick the zip.
3. Confirm the install and press **Reload**.

Two buttons appear on the AnalyseTool tab, Families panel: **Family Manager** opens a window,
**Component** opens the placement palette in the dockable pane.

One archive carries builds for **2025, 2026 and 2027** — the right year is picked at install time.
Updates arrive through the `updateFeed` in the manifest; Settings shows a badge when a new release
is out.

### Installing by hand

To skip the dialog, unpack the zip into
`%LOCALAPPDATA%\AnalyseTool\extensions\analysetool.family-manager\` and press Reload. The archive
contains:

```
plugin.json      manifest and UI live in the root
dist\            built interface
2025\            assemblies, one folder per Revit year
2026\
2027\
```

## What the agent gets

The extension's commands appear over MCP as `analysetool_family-manager_GetFamilies` and friends.
Nothing to configure: the extension is loaded, its commands are visible; it is disabled, they are
gone.

## Building from source

The interface is built first — its output goes to `extension/dist`:

```
cd ui && npm install && npm run build
```

Then the extension. One call builds all three years and drops a ready archive in
`extension/artifacts/`:

```
cd extension && dotnet build -c Release -t:PackExtension
```

A single year, either by property or by configuration — the csproj understands both:

```
dotnet build -c Release -p:RevitVersion=2026
dotnet build -c "Release R26"
```

### Repository layout

```
ui\           interface sources (Vite). OUTSIDE the extension folder:
              PackExtension sweeps everything that is not C# source into the
              archive, and would have taken node_modules with it.
extension\    the extension folder itself — what gets packaged and installed
```

The frontend depends on **nothing from the host except `window.AT`**: its own components, its own
theme, its own stylesheet. See `ui/src/bootstrap.ts`.

## License

Apache-2.0, same as the platform. See [LICENSE](LICENSE).
