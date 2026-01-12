 BetterSeason - Advanced Realistic Seasons Plugin

A comprehensive Minecraft Paper plugin (v1.21.8) that brings realistic seasonal effects, advanced temperature systems, and dynamic calendar features to your server.

**Author:** epic_boat  
**Version:** 1.0.0  
**Package:** com.betterseason.epicboat

## Features

### 🌍 Seasonal System
- **4 Distinct Seasons**: Spring, Summer, Autumn, Winter
- **Temperature Ranges**:
  - Spring: 5-23°C
  - Summer: 25-40°C
  - Autumn: 5-25°C
  - Winter: -10-5°C
- **Seasonal Effects**:
  - Particle effects (falling leaves, snow)
  - Modified crop growth rates
  - Special seasonal events
  - Biome-specific visual changes

### 📅 Advanced Calendar System
- **Realistic Day/Night Cycles**: Variable day/night lengths per month
- **Month Configuration**: Customizable days per month
- **Real-World Time Sync**: Optional synchronization with system clock
- **Date Format Support**: Both American (MM/DD/YYYY) and International (DD/MM/YYYY)
- **Week Days**: Named day-of-week tracking
- **PlaceholderAPI Ready**: Expandable for custom placeholders

### 🌡️ Advanced Temperature System

#### Temperature Modifiers:
1. **Season**: Base temperature per season
2. **Biome**: Biome-specific temperature variations
3. **Time of Day**: Warmer during day, colder at night
4. **Weather**: Rain/thunderstorms reduce temperature
5. **Height (Y-level)**: Temperature decreases with altitude
6. **Block Light**: Light sources provide warmth
7. **Water Proximity**: Water and ice reduce temperature
8. **Armor**: Different armor types provide warmth
9. **Food Level**: Hunger affects temperature tolerance
10. **Movement (Sprinting)**: Activity generates body heat

#### Temperature Effects on Players:
- **Freezing**: Damage below 0°C, slowness effect
- **Burning**: Damage above 35°C, fire effect
- **Hunger**: Cold and heat increase hunger
- **Visual Effects**: Breath particles in cold, sweat in heat
- **Status Effects**: Configurable potion effects

### 🌾 Crop Growth System
- **Seasonal Modifiers**: Different growth rates per season
- **Greenhouse Support**: Protected areas with optimal growing conditions
- **Crop Suitability**: Some crops grow better in certain seasons
- **Growth Tracking**: Monitor crop health across seasons
- **Lore System**: Harvested crops display seasonal quality

### 🎨 Seasonal Visual Effects
- **Autumn Soil Painter**: Brown/orange terrain coloring
- **Winter World Painter**: Ice coverage and snow layers
- **Canopy Snow**: Snow on tree leaves during winter
- **Fast Leaf Decay**: Accelerated leaf falling in autumn
- **Seasonal Flora**: Dynamic vegetation changes

### 🧬 Biome System
- **Biome Spoofing**: Seasonal biome transformations
- **Backup Store**: Preserves original biome data
- **Spawn Guard**: Controls seasonal mob spawns
- **Seasonal Flora**: Different plants per season

## Project Structure

```
BetterSeason/
├── pom.xml
├── src/main/
│   ├── java/com/betterseason/epicboat/
│   │   ├── BetterSeason.java (Main plugin class)
│   │   ├── commands/
│   │   │   └── SeasonCommand.java
│   │   ├── listeners/
│   │   │   └── EventListeners.java
│   │   ├── managers/
│   │   │   ├── SeasonManager.java
│   │   │   ├── CalendarManager.java
│   │   │   ├── TemperatureManager.java
│   │   │   └── temperature/modifiers/
│   │   │       ├── TemperatureModifier.java (Interface)
│   │   │       ├── TemperatureCalculator.java
│   │   │       ├── SeasonTemperatureModifier.java
│   │   │       ├── BiomeTemperatureModifier.java
│   │   │       ├── TimeTemperatureModifier.java
│   │   │       ├── WeatherTemperatureModifier.java
│   │   │       ├── HeightTemperatureModifier.java
│   │   │       ├── BlockLightTemperatureModifier.java
│   │   │       ├── WaterTemperatureModifier.java
│   │   │       ├── ArmorTemperatureModifier.java
│   │   │       ├── FoodTemperatureModifier.java
│   │   │       └── SprintingTemperatureModifier.java
│   │   ├── services/
│   │   │   ├── crop/
│   │   │   │   ├── CropGrowthService.java
│   │   │   │   ├── CropLoreService.java
│   │   │   │   ├── GreenhouseService.java
│   │   │   │   ├── SeasonalCropConfig.java
│   │   │   │   ├── SeasonalCropGrowthListener.java
│   │   │   │   └── SeasonalCropLoreListener.java
│   │   │   ├── biome/
│   │   │   │   ├── AutumnSoilPainter.java
│   │   │   │   ├── WinterWorldPainter.java
│   │   │   │   ├── BiomeSpoofAdapter.java
│   │   │   │   ├── BiomeBackupStore.java
│   │   │   │   ├── BiomeSpoofSpawnGuard.java
│   │   │   │   ├── CanopySnowPainter.java
│   │   │   │   └── FastLeafDecayService.java
│   │   │   └── flora/
│   │   │       ├── SeasonalFloraController.java
│   │   │       ├── VillagerTypeOverrides.java
│   │   │       └── WinterWorldGuardHelper.java
│   │   └── utils/
│   │       ├── Season.java (Enum)
│   │       └── DateTimeUtil.java
│   └── resources/
│       ├── plugin.yml
│       └── config.yml
```

## Commands

### `/season`
View current season and calendar information.

**Usage:** `/season`  
**Permission:** `betterseason.season`

**Output:**
```
========== BetterSeason Info ==========
Currently: Summer
Date: June 15, 2024
Day: Monday
Time: 14:30
Temperature: 32.5°C
========================================
```

### `/season set <season>`
Set the current season (admin only).

**Usage:** `/season set summer`  
**Permission:** `betterseason.season.set`  
**Valid Seasons:** SPRING, SUMMER, AUTUMN, WINTER

## Configuration

### config.yml Structure

```yaml
enabled: true
american-date-format: false
sync-time-with-real-world: false

# Temperature settings
temperature:
  enabled: true
  season-modifiers:
    SPRING:
      min-temperature: 5
      max-temperature: 23
    SUMMER:
      min-temperature: 25
      max-temperature: 40
    # ... etc

# Seasonal effects
seasonal-effects:
  enabled: true
  crop-growth-modifiers:
    SPRING: 1.5
    SUMMER: 2.0
    AUTUMN: 1.2
    WINTER: 0.3

# Month configuration
months:
  January:
    days: 31
    day-length-in-minutes: 7
    night-length-in-minutes: 13
  # ... etc
```

## How It Works

### Seasonal Rotation
- Automatically rotates seasons every ~91 in-game days
- Each month has configurable day/night lengths
- Season changes trigger seasonal effects globally

### Temperature Calculation
1. Start with season base temperature
2. Add/subtract modifiers from each source
3. Combine into final temperature
4. Apply effects based on thresholds
5. Clamp to realistic range (-50°C to +50°C)

### Crop Growth
- Base growth rate modified by season
- Growth chance checked on natural growth events
- Winter significantly slows growth (30%)
- Summer doubles growth rate (200%)

### Particle Effects
- Seasonal particles spawn around players
- Configurable density and type per season
- Autumn: falling leaves
- Winter: snow
- Spring: cherry blossoms
- Summer: smoke effects

## Permissions

```yaml
betterseason.season:
  description: View current season information
  default: true

betterseason.season.set:
  description: Set the current season
  default: op
```

## Installation

1. **Build the plugin:**
   ```bash
   cd BetterSeason
   mvn clean package
   ```

2. **Deploy JAR:**
   - Copy `target/BetterSeason-1.0.0.jar` to your `plugins/` directory

3. **Start server:**
   - Server will generate default config on first run
   - Edit `plugins/BetterSeason/config.yml` as needed
   - Restart server for changes

## Configuration Examples

### Enable Extreme Temperature Effects
```yaml
temperature:
  effects:
    freezing-threshold: 0
    freezing-damage: 2
    burning-threshold: 35
    burning-damage: 2
    hunger-from-cold: true
    hunger-from-heat: true
```

### Customize Season Dates
```yaml
winter-start: 'December 1'
spring-start: 'March 1'
summer-start: 'June 1'
fall-start: 'September 1'
```

### Adjust Crop Growth
```yaml
seasonal-effects:
  crop-growth-modifiers:
    SPRING: 2.0
    SUMMER: 3.0
    AUTUMN: 1.5
    WINTER: 0.5
```

## Technical Details

### Threading Model
- **Season Rotation**: Runs every in-game day (24000 ticks)
- **Temperature Effects**: Applied every second (20 ticks)
- **Particle Spawning**: Every 2 seconds (40 ticks)
- All tasks are asynchronous where possible

### Data Persistence
- Season data saved to config on change
- Calendar state persisted between restarts
- Temperature calculations are real-time (no storage)

### API Integration Points
- **PlaceholderAPI**: Ready for expansion
- **WorldGuard**: Helper class for region support
- **Custom Modifiers**: Extensible modifier system

## Performance Optimization

- Efficient chunk-based processing
- Particle effects limited to loaded chunks
- Temperature calculations are lightweight
- No database dependency (config-based)

## Future Enhancements

- [ ] Crop-specific seasonal recipes
- [ ] Dynamic NPC trading based on season
- [ ] Seasonal mob drops
- [ ] Weather event customization
- [ ] PlaceholderAPI integration
- [ ] WorldGuard support
- [ ] MySQL backend option
- [ ] Custom season creation

## Support & Issues

For bug reports and feature requests, please visit the project repository.

## License

GNU General Public License v3.0

---

**Happy seasoning! 🍂❄️🌸☀️**
