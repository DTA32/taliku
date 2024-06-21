package com.dta32.taliku;

import com.dta32.taliku.controller.MainMenu;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class Main extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        MainStage mainStage = MainStage.getInstance();
        mainStage.setStage(stage);
        MainMenu mainMenu = MainMenu.getInstance();
        mainMenu.show();
        stage.setTitle("Taliku");
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}