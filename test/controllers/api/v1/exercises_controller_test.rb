require "test_helper"

class Api::V1::ExercisesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_exercises_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_exercises_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_exercises_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_exercises_destroy_url
    assert_response :success
  end
end
