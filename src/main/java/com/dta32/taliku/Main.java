package com.dta32.taliku;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class Main extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        MainStage.stage = stage;
        FXMLLoader fxmlLoader = new FXMLLoader(Main.class.getResource("fxml/main-menu.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 600, 450);
        MainStage.stage.setScene(scene);
        MainStage.stage.setTitle("Taliku");
        MainStage.stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}