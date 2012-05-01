package controllers

import play.api.mvc.Action
import play.api.mvc.Results._
import play.api.libs.json.Json

/**
 * Created with IntelliJ IDEA.
 * User: rohit
 * Date: 5/1/12
 * Time: 5:00 AM
 * To change this template use File | Settings | File Templates.
 */

object Dashboards {
  def getDashboard(clientId:String, dashboardId:String) = Action{
    Ok("""
      [
        {
          "height" : 200,
          "span" : 4,
          "widget" : "widget01"
        },
        {
          "height" : 340,
          "span" : 4,
          "widget" : "widget01"
        },
        {
          "height" : 240,
          "span" : 4,
          "widget" : "widget01"
        },
        {
          "height" : 200,
          "span" : 4,
          "widget" : "widget01"
        },
        {
          "height" : 240,
          "span" : 4,
          "widget" : "widget01"
        },
        {
          "height" : 100,
          "span" : 4,
          "widget" : "widget01"
        }
      ]
    """).as("application/json")
  }
}
