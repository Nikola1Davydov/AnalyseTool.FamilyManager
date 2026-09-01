# AnalyseTool Family Manager

Менеджер семейств для [AnalyseTool](https://github.com/Nikola1Davydov/AnalyzeTool): палитра
семейств, библиотека, пакетное переименование, очистка неиспользуемого, размещение и 3D-просмотр.

Это **расширение**, а не часть плагина: ставится отдельно и обновляется отдельно.

## Установка

Нужен установленный AnalyseTool.

1. Скачайте `AnalyseTool.FamilyManager.zip` из
   [последнего релиза](https://github.com/Nikola1Davydov/AnalyseTool.FamilyManager/releases/latest).
2. В Revit: **AnalyseTool → Settings → Extensions → Install from file…** и укажите скачанный zip.
3. Подтвердите установку и нажмите **Reload**.

Кнопка **Family Manager** появится на вкладке AnalyseTool, панель Families.

Обновления приходят через `updateFeed` в манифесте: Settings показывает значок, когда вышел
новый релиз.

### Установка вручную

Если предпочитаете без диалога — распакуйте zip в
`%LOCALAPPDATA%\AnalyseTool\extensions\analysetool.family-manager\` и нажмите Reload. Раскладка
внутри папки:

```
analysetool.family-manager\
├── plugin.json      ← манифест и UI в корне
├── dist\            ← собранный интерфейс
├── 2025\            ← сборка под свой год Revit
├── 2026\
└── 2027\
```

## Что даёт агенту

Команды расширения автоматически попадают в MCP под именами вида
`analysetool_family-manager_GetFamilies`. Отдельной настройки не требуется: расширение
загружено — команды видны, выключено — их нет.

## Сборка из исходников

Интерфейс собирается первым — его результат уезжает в `extension/dist`:

```
cd ui && npm install && npm run build
```

Затем расширение. Один вызов собирает все три года и кладёт готовый архив в
`extension/artifacts/`:

```
cd extension && dotnet build -c Release -t:PackExtension
```

Отдельный год — либо свойством, либо конфигурацией, csproj понимает оба способа:

```
dotnet build -c Release -p:RevitVersion=2026
dotnet build -c "Release R26"
```

### Раскладка репозитория

```
ui\           исходники интерфейса (Vite). СНАРУЖИ папки расширения:
              PackExtension сметает в архив всё, что не исходники C#,
              и утащил бы node_modules вместе с ними.
extension\    сама папка расширения — то, что упаковывается и ставится
```

## Лицензия

Apache-2.0, как и сама платформа. См. [LICENSE](LICENSE).
