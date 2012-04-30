package controllers

import play.api.mvc.BodyParsers.parse
import play.api._
import play.api.mvc._

object Events extends  Controller{
    def recordEvent(clientId:String) = Action(parse.json){request =>
      val resp = <html>
        <div>
          <div>{clientId}</div>
          <div>{request.body}</div>
        </div>
      </html>
      Ok(resp).as(HTML)
    }
}
