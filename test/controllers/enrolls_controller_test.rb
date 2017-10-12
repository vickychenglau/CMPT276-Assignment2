require 'test_helper'

class EnrollsControllerTest < ActionController::TestCase
  setup do
    @enroll = enrolls(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:enrolls)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create enroll" do
    assert_difference('Enroll.count') do
      post :create, enroll: { course_id: @enroll.course_id, lettergrade: @enroll.lettergrade, percentage: @enroll.percentage, student_id: @enroll.student_id }
    end

    assert_redirected_to enroll_path(assigns(:enroll))
  end

  test "should show enroll" do
    get :show, id: @enroll
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @enroll
    assert_response :success
  end

  test "should update enroll" do
    patch :update, id: @enroll, enroll: { course_id: @enroll.course_id, lettergrade: @enroll.lettergrade, percentage: @enroll.percentage, student_id: @enroll.student_id }
    assert_redirected_to enroll_path(assigns(:enroll))
  end

  test "should destroy enroll" do
    assert_difference('Enroll.count', -1) do
      delete :destroy, id: @enroll
    end

    assert_redirected_to enrolls_path
  end
end
