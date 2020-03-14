class TripsController < ApplicationController
  before_action :set_trip, only: [:show, :update, :destroy]

  # GET /trips
  def index
    response.headers["Access-Control-Allow-Origin"] = "*"
    @trips = Trip.all

    render json: @trips
  end

  # GET /trips/1
  def show
    render json: @trip
  end

  # POST /trips
  def create
    @trip = Trip.new(trip_params)

    if @trip.save
      render json: @trip, status: :created, location: @trip
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trips/1
  def update
    #binding.irb
    #puts request.raw_post
    if @trip.update(trip_params)
      render json: @trip
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trips/1
  def destroy
    @trip.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trip
      #puts params
      @trip = Trip.find(params[:id])
      #binding.irb
    end

    # Only allow a trusted parameter "white list" through.
    def trip_params
      #puts params.inspect
      params.require(:trip).permit(:title, :released_at, :artist_name, :rating, :trip)
    end
end
