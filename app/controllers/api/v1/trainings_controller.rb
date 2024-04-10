class Api::V1::TrainingsController < ApplicationController
  def index
    trainings = Training.all.order(created_at: :desc)
    render json: trainings
  end

  def show
  end
end
