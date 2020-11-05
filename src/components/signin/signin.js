import React from "react";
import "./style.css";

export default function signIn(props) {
    return (
      <>
        <<div class="full-width" style="background:#eaeaea;">
            <div class="container" style="padding:30px 0;">
                <div class="business-container">
                    <!--<a href="contacts.php" class="" style="color: #000; font-size: 14px; font-weight: bold;"></a>-->
                    <div class="business">
                        <h1>Lorem Ipsum dolor?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <!-- Form -->
                        <form>
                        <div class="row">
                            <div class="col-xs-12 col-md-5" style="margin: 12px 0;">
                            <input type="text" class="form-control" placeholder="Email">
                            </div>
                            <div class="col-xs-12 col-md-5" style="margin: 12px 0;">
                            <input type="email" class="form-control" placeholder="Password">
                            </div>
                            <div class="col-xs-12 col-md-5">
                            <button type="submit" class="btn btn-primary mb-2" style="margin:-30px 0 0; width:100px;">Send</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }