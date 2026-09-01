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

```
dotnet build -c Release
dotnet build -c Release -p:RevitVersion=2026
dotnet build -c Release -p:RevitVersion=2027
```

Год Revit определяет TFM, пакеты API и папку вывода. Каждый год кладётся в свою папку, поэтому
годы сосуществуют — по одной команде на каждый год, который отгружаете.

Интерфейс собирается отдельно, из `ui/`.

## Лицензия

Apache-2.0, как и сама платформа. См. [LICENSE](LICENSE).
