package com.dta32.taliku;

import javafx.fxml.FXMLLoader;
import javafx.fxml.JavaFXBuilderFactory;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;
import java.util.Objects;

public class MainStage {
    private Stage stage;
    private static MainStage mainStage;
    private static JavaFXBuilderFactory javaFXBuilderFactory;
    public static MainStage getInstance() { return mainStage = mainStage == null ? new MainStage() : mainStage; }
    private MainStage(){
        javaFXBuilderFactory = new JavaFXBuilderFactory();
    }
    public void setStage(Stage stage){
        this.stage = stage;
    }
    public Parent replaceSceneContent(String fxml, Parent parent) throws IOException {
        Parent page = null;
        if(parent == null){
            page = FXMLLoader.load(Objects.requireNonNull(getClass().getResource("fxml/" + fxml + ".fxml")), null, javaFXBuilderFactory);
        }
        else{
            page = parent;
        }
        Scene scene = stage.getScene();
        if (scene == null) {
            scene = new Scene(page, 600, 450);
            stage.setScene(scene);
        } else {
            stage.getScene().setRoot(page);
        }
        return page;
    }

}