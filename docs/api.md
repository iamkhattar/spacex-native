# spacex-native GraphQL API

spacex-native uses GraphQL for the API because it offers significantly more flexibility the clients.

## Launches

Retrieves details about all launches

```bash
  launches {
      flight_number                 int
      mission_name                  string
      launch_year                   string
      launch_success                boolean
      rocket {
          rocket_id                 string
          rocket_name               string
          rocket_type               string
          wikipedia                 string
          description               string
          first_flight              string
      }
      links {
          mission_patch             string
          mission_patch_small       string
          wikipedia                 string
          youtube_id                string
          article_link              string
      }
  }
```

## Launch

Retrieves details about a single launches

```bash
  launch(flight_number: int) {
      flight_number                 int
      mission_name                  string
      launch_year                   string
      launch_success                boolean
      rocket {
          rocket_id                 string
          rocket_name               string
          rocket_type               string
          wikipedia                 string
          description               string
          first_flight              string
      }
      links {
          mission_patch             string
          mission_patch_small       string
          wikipedia                 string
          youtube_id                string
          article_link              string
      }
  }
```

## Rockets

Retrieves details about all Rockets

```bash
  rockets {
      rocket_id                     string
      rocket_name                   string
      rocket_type                   string
      wikipedia                     string
      description                   string
      first_flight                  string
  }
```

## Rocket

Retrieves details about a single launches

```bash
  rocket(rocket_id: string) {
      rocket_id                     string
      rocket_name                   string
      rocket_type                   string
      wikipedia                     string
      description                   string
      first_flight                  string
  }
```
