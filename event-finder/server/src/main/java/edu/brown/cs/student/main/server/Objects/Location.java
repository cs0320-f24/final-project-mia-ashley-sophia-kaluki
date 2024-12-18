package edu.brown.cs.student.main.server.Objects;

import com.squareup.moshi.Json;

public class Location {
  @Json(name = "name")
  private String name;

  @Json(name = "latitude")
  private String latitude;

  @Json(name = "longitude")
  private String longitude;

  @Json(name = "address")
  private String address;

  public Location(String name, String latitude, String longitude, String address) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.address = address;
  }

  public String getName() {
    return this.name;
  }

  public String getLatitude() {
    return this.latitude;
  }

  public String getLongitude() {
    return this.longitude;
  }

  public String getAddress() {
    return this.address;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setLatitude(String latitude) {
    this.latitude = latitude;
  }

  public void setLongitude(String longitude) {
    this.longitude = longitude;
  }

  public void setUrl(String address) {
    this.address = address;
  }
}
