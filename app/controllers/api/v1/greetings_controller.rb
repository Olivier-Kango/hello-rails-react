# frozen_string_literal: true

module Api
  module V1
    class GreetingsController < ApplicationController
      def random
        random_greeting = Message.order('RANDOM()').first
        render json: { message: random_greeting.greeting }
      end

      def message
        greeting
      end
    end
  end
end
