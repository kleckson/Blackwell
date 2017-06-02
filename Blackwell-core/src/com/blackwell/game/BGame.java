package com.blackwell.game;

import com.badlogic.gdx.Game;
import com.blackwell.game.splash.Splash;

public class BGame extends Game {

	@Override
	public void create() {
		setScreen(new Splash());
	}
	
	public void update(){
		
	}

	@Override
	public void resize(int width, int height) {
		super.resize(width, height);
	}

	@Override
	public void render() {
		super.render();
	}

	@Override
	public void pause() {
		super.pause();
	}

	@Override
	public void resume() {
		super.resume();
	}

	@Override
	public void dispose() {
		super.dispose();
	}

	
	
}
